import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Search, 
  Plus, 
  CheckCircle2, 
  Clock,
  Video,
  MoreVertical,
  Filter
} from "lucide-react";

// Mock data for meetings
const allMeetings = [
  {
    id: 1,
    title: "Product Review Meeting",
    time: "2:00 PM - 3:00 PM",
    date: "Jan 14, 2026",
    platform: "Google Meet",
    autoAttend: true,
    status: "upcoming",
  },
  {
    id: 2,
    title: "Team Standup",
    time: "10:00 AM - 10:30 AM",
    date: "Jan 15, 2026",
    platform: "Google Meet",
    autoAttend: true,
    status: "upcoming",
  },
  {
    id: 3,
    title: "Client Presentation",
    time: "3:30 PM - 4:30 PM",
    date: "Jan 15, 2026",
    platform: "Zoom",
    autoAttend: false,
    status: "upcoming",
  },
  {
    id: 4,
    title: "Weekly Team Sync",
    time: "9:00 AM - 9:45 AM",
    date: "Jan 13, 2026",
    platform: "Google Meet",
    autoAttend: true,
    status: "completed",
    attended: true,
    hasRecording: true,
  },
  {
    id: 5,
    title: "Design Review",
    time: "2:00 PM - 3:20 PM",
    date: "Jan 12, 2026",
    platform: "Google Meet",
    autoAttend: true,
    status: "completed",
    attended: true,
    hasRecording: true,
  },
  {
    id: 6,
    title: "Sprint Planning",
    time: "11:00 AM - 12:00 PM",
    date: "Jan 11, 2026",
    platform: "Microsoft Teams",
    autoAttend: true,
    status: "completed",
    attended: true,
    hasRecording: true,
  },
];

const Meetings = () => {
  const [filter, setFilter] = useState<"all" | "upcoming" | "completed">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMeetings = allMeetings.filter((meeting) => {
    const matchesFilter = filter === "all" || meeting.status === filter;
    const matchesSearch = meeting.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="font-display text-3xl font-bold mb-2">Meetings</h1>
              <p className="text-muted-foreground">
                Manage your upcoming and past meetings
              </p>
            </div>
            <Button variant="hero" className="gap-2">
              <Plus className="w-4 h-4" />
              Schedule Meeting
            </Button>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search meetings..."
                className="pl-10 h-11 bg-secondary/50 border-border/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 p-1 rounded-lg bg-secondary/50">
              {(["all", "upcoming", "completed"] as const).map((tab) => (
                <Button
                  key={tab}
                  variant={filter === tab ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setFilter(tab)}
                  className={filter === tab ? "bg-primary/20 text-primary" : ""}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Button>
              ))}
            </div>

            <Button variant="outline" size="icon" className="h-11 w-11">
              <Filter className="w-4 h-4" />
            </Button>
          </div>

          {/* Meetings List */}
          <div className="space-y-4">
            {filteredMeetings.map((meeting) => (
              <div
                key={meeting.id}
                className="p-6 rounded-2xl glass-card hover:bg-secondary/30 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      meeting.status === "completed" 
                        ? "bg-success/10" 
                        : "gradient-primary"
                    }`}>
                      {meeting.status === "completed" ? (
                        <CheckCircle2 className="w-6 h-6 text-success" />
                      ) : (
                        <Calendar className="w-6 h-6 text-primary-foreground" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-1">
                        {meeting.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {meeting.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {meeting.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <Video className="w-4 h-4" />
                          {meeting.platform}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {meeting.status === "upcoming" ? (
                      <>
                        {meeting.autoAttend ? (
                          <span className="text-xs font-medium text-success bg-success/10 px-3 py-1.5 rounded-full flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            Auto-attend enabled
                          </span>
                        ) : (
                          <Button variant="outline" size="sm">
                            Enable Auto-attend
                          </Button>
                        )}
                      </>
                    ) : (
                      <>
                        {meeting.hasRecording && (
                          <Button variant="heroOutline" size="sm" className="gap-1">
                            <Video className="w-4 h-4" />
                            View Recording
                          </Button>
                        )}
                        <span className="text-xs font-medium text-success bg-success/10 px-3 py-1.5 rounded-full">
                          Attended
                        </span>
                      </>
                    )}
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {filteredMeetings.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-display text-lg font-semibold mb-2">No meetings found</h3>
                <p className="text-muted-foreground">
                  {searchQuery ? "Try a different search term" : "Schedule a meeting to get started"}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Meetings;
