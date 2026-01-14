import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Video, 
  Search, 
  Play, 
  Download,
  FileText,
  Clock,
  Calendar,
  MoreVertical,
  Grid,
  List
} from "lucide-react";

// Mock data for recordings
const recordings = [
  {
    id: 1,
    title: "Weekly Team Sync",
    date: "Jan 13, 2026",
    duration: "45 min",
    size: "324 MB",
    hasTranscript: true,
    hasSummary: true,
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=225&fit=crop",
  },
  {
    id: 2,
    title: "Design Review Session",
    date: "Jan 12, 2026",
    duration: "1h 20min",
    size: "892 MB",
    hasTranscript: true,
    hasSummary: true,
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=225&fit=crop",
  },
  {
    id: 3,
    title: "Sprint Planning",
    date: "Jan 11, 2026",
    duration: "55 min",
    size: "456 MB",
    hasTranscript: false,
    hasSummary: false,
    thumbnail: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=400&h=225&fit=crop",
  },
  {
    id: 4,
    title: "Client Onboarding Call",
    date: "Jan 10, 2026",
    duration: "32 min",
    size: "245 MB",
    hasTranscript: true,
    hasSummary: true,
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=225&fit=crop",
  },
  {
    id: 5,
    title: "Product Roadmap Discussion",
    date: "Jan 9, 2026",
    duration: "1h 5min",
    size: "678 MB",
    hasTranscript: true,
    hasSummary: true,
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=225&fit=crop",
  },
  {
    id: 6,
    title: "Q4 Review Meeting",
    date: "Jan 8, 2026",
    duration: "48 min",
    size: "389 MB",
    hasTranscript: true,
    hasSummary: false,
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=225&fit=crop",
  },
];

const Recordings = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecordings = recordings.filter((recording) =>
    recording.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="font-display text-3xl font-bold mb-2">Recordings</h1>
              <p className="text-muted-foreground">
                Access all your meeting recordings and transcripts
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {recordings.length} recordings • 3.2 GB used
              </span>
            </div>
          </div>

          {/* Search and View Toggle */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search recordings..."
                className="pl-10 h-11 bg-secondary/50 border-border/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-1 p-1 rounded-lg bg-secondary/50">
              <Button
                variant={viewMode === "grid" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-primary/20 text-primary" : ""}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-primary/20 text-primary" : ""}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Recordings Grid/List */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecordings.map((recording) => (
                <div
                  key={recording.id}
                  className="rounded-2xl glass-card overflow-hidden hover:bg-secondary/30 transition-all group"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-secondary">
                    <img
                      src={recording.thumbnail}
                      alt={recording.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="hero" size="icon" className="w-14 h-14 rounded-full">
                        <Play className="w-6 h-6" />
                      </Button>
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-background/80 text-xs font-medium">
                      {recording.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-display font-semibold mb-2 truncate">
                      {recording.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {recording.date}
                      </span>
                      <span>{recording.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {recording.hasTranscript && (
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          Transcript
                        </span>
                      )}
                      {recording.hasSummary && (
                        <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                          AI Summary
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredRecordings.map((recording) => (
                <div
                  key={recording.id}
                  className="p-4 rounded-2xl glass-card hover:bg-secondary/30 transition-all"
                >
                  <div className="flex items-center gap-4">
                    {/* Thumbnail */}
                    <div className="relative w-32 h-20 rounded-lg overflow-hidden bg-secondary flex-shrink-0 group">
                      <img
                        src={recording.thumbnail}
                        alt={recording.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Play className="w-6 h-6 text-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold mb-1 truncate">
                        {recording.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {recording.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {recording.duration}
                        </span>
                        <span>{recording.size}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="hidden sm:flex items-center gap-2">
                      {recording.hasTranscript && (
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          Transcript
                        </span>
                      )}
                      {recording.hasSummary && (
                        <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                          AI Summary
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <Button variant="heroOutline" size="sm" className="gap-1">
                        <Play className="w-4 h-4" />
                        Play
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredRecordings.length === 0 && (
            <div className="text-center py-12">
              <Video className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-display text-lg font-semibold mb-2">No recordings found</h3>
              <p className="text-muted-foreground">
                {searchQuery ? "Try a different search term" : "Your meeting recordings will appear here"}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Recordings;
