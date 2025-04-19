"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"

// Sample video data
const videos = [
  {
    id: 1,
    title: "Boxing Fundamentals: Jab Technique",
    thumbnail: "/sponsor.jpg",
    category: "technique",
    duration: "00:31",
    date: "2 weeks ago",
    videoId: "ASdyM6mlXJ4",
  },
  {
    id: 2,
    title: "Full Boxing Workout Routine",
    thumbnail: "sponsor2.jpg",
    category: "workout",
    duration: "02:19",
    date: "1 month ago",
    videoId: "o24TkqHz1WE",
  },
  {
    id: 3,
    title: "Day in the Life: Training Camp",
    thumbnail: "/placeholder.svg?height=400&width=600",
    category: "vlog",
    duration: "18:45",
    date: "3 weeks ago",
    videoId: "example3",
  },
  {
    id: 4,
    title: "Boxing Footwork Drills",
    thumbnail: "/placeholder.svg?height=400&width=600",
    category: "technique",
    duration: "15:22",
    date: "2 months ago",
    videoId: "example4",
  },
  {
    id: 5,
    title: "HIIT Boxing Circuit",
    thumbnail: "/placeholder.svg?height=400&width=600",
    category: "workout",
    duration: "22:10",
    date: "3 weeks ago",
    videoId: "example5",
  },
  {
    id: 6,
    title: "Fight Preparation Vlog",
    thumbnail: "/placeholder.svg?height=400&width=600",
    category: "vlog",
    duration: "32:45",
    date: "1 week ago",
    videoId: "example6",
  },
]

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null)

  return (
    <div>
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All Videos</TabsTrigger>
            <TabsTrigger value="technique">Technique</TabsTrigger>
            <TabsTrigger value="workout">Workouts</TabsTrigger>
            <TabsTrigger value="vlog">Vlogs</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} onSelect={setSelectedVideo} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="technique" className="mt-0">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos
              .filter((video) => video.category === "technique")
              .map((video) => (
                <VideoCard key={video.id} video={video} onSelect={setSelectedVideo} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="workout" className="mt-0">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos
              .filter((video) => video.category === "workout")
              .map((video) => (
                <VideoCard key={video.id} video={video} onSelect={setSelectedVideo} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="vlog" className="mt-0">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos
              .filter((video) => video.category === "vlog")
              .map((video) => (
                <VideoCard key={video.id} video={video} onSelect={setSelectedVideo} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <VideoDialog video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  )
}

function VideoCard({
  video,
  onSelect,
}: {
  video: (typeof videos)[0]
  onSelect: (video: (typeof videos)[0]) => void
}) {
  return (
    <div className="group cursor-pointer" onClick={() => onSelect(video)}>
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
            <Play className="h-6 w-6" />
          </Button>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      <div className="mt-3">
        <h3 className="font-medium line-clamp-1">{video.title}</h3>
        <p className="text-sm text-muted-foreground">{video.date}</p>
      </div>
    </div>
  )
}

function VideoDialog({
  video,
  onClose,
}: {
  video: (typeof videos)[0] | null
  onClose: () => void
}) {
  if (!video) return null

  return (
    <Dialog open={!!video} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
        <div className="aspect-video bg-black">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.videoId}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  )
}
