
import React, { useState } from 'react';
import Header from './components/Header';
import ChannelList from './components/ChannelList';
import VideoPlayer from './components/VideoPlayer';
import { Channel } from './types';
import { CHANNELS } from './constants';

const App: React.FC = () => {
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Header />
      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        <aside className="w-full md:w-64 lg:w-72 bg-gray-800/50 backdrop-blur-sm p-4 overflow-y-auto shrink-0 border-r border-gray-700">
          <h2 className="text-xl font-bold mb-4 text-gray-200">Channels</h2>
          <ChannelList
            channels={CHANNELS}
            selectedChannelId={selectedChannel?.id}
            onSelectChannel={setSelectedChannel}
          />
        </aside>
        <main className="flex-1 p-4 md:p-6 lg:p-8 bg-black/20 flex items-center justify-center">
          <VideoPlayer 
            key={selectedChannel?.id} 
            streamUrl={selectedChannel?.streamUrl} 
          />
        </main>
      </div>
    </div>
  );
};

export default App;
