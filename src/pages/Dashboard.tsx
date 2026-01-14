import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Video, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Play,
  Users,
  TrendingUp,
  BarChart3
} from "lucide-react";

// Mock data for dashboard
const upcomingMeetings = [
  {
    id: 1,
    title: "Product Review Meeting",
    time: "2:00 PM",
    date: "Today",
    platform: "Google Meet",
    autoAttend: true,
  },
  {
    id: 2,
    title: "Team Standup",
    time: "10:00 AM",
    date: "Tomorrow",
    platform: "Google Meet",
    autoAttend: true,
  },
  {
    id: 3,
    title: "Client Presentation",
    time: "3:30 PM",
    date: "Tomorrow",
    platform: "Zoom",
    autoAttend: false,
  },
];

const recentRecordings = [
  {
    id: 1,
    title: "Weekly Team Sync",
    date: "Jan 13, 2026",
    duration: "45 min",
    hasTranscript: true,
  },
  {
    id: 2,
    title: "Design Review",
    date: "Jan 12, 2026",
    duration: "1h 20min",
    hasTranscript: true,
  },
  {
    id: 3,
    title: "Sprint Planning",
    date: "Jan 11, 2026",
    duration: "55 min",
    hasTranscript: false,
  },
];

const stats = [
  { label: "Meetings Attended", value: "47", icon: Calendar, trend: "+12%" },
  { label: "Hours Saved", value: "32h", icon: Clock, trend: "+8h" },
  { label: "Recordings", value: "38", icon: Video, trend: "+5" },
  { label: "Attendance Rate", value: "100%", icon: CheckCircle2, trend: "Perfect" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold mb-2">Welcome back, User!</h1>
            <p className="text-muted-foreground">
              Here's what's happening with your meetings today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl glass-card hover:bg-secondary/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-success bg-success/10 px-2 py-1 rounded-full">
                    {stat.trend}
                  </span>
                </div>
                <p className="font-display text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Upcoming Meetings */}
            <div className="lg:col-span-2 p-6 rounded-2xl glass-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl font-semibold">Upcoming Meetings</h2>
                <Link to="/meetings">
                  <Button variant="ghost" size="sm" className="gap-1">
                    View all
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

              <div className="space-y-4">
                {upcomingMeetings.map((meeting) => (
                  <div
                    key={meeting.id}
                    className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium">{meeting.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {meeting.date} • {meeting.time} • {meeting.platform}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {meeting.autoAttend ? (
                        <span className="text-xs font-medium text-success bg-success/10 px-3 py-1 rounded-full flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          Auto-attend
                        </span>
                      ) : (
                        <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                          Manual
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              {/* Quick Stats Card */}
              <div className="p-6 rounded-2xl glass-card">
                <h2 className="font-display text-xl font-semibold mb-4">This Week</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-sm">Meetings attended</span>
                    </div>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-accent" />
                      <span className="text-sm">Time saved</span>
                    </div>
                    <span className="font-semibold">8h 30m</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="w-5 h-5 text-success" />
                      <span className="text-sm">Attendance rate</span>
                    </div>
                    <span className="font-semibold">100%</span>
                  </div>
                </div>
              </div>

              {/* Recent Recordings */}
              <div className="p-6 rounded-2xl glass-card">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display text-xl font-semibold">Recent Recordings</h2>
                  <Link to="/recordings">
                    <Button variant="ghost" size="sm" className="gap-1">
                      All
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                <div className="space-y-3">
                  {recentRecordings.map((recording) => (
                    <div
                      key={recording.id}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/30 transition-colors cursor-pointer group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Play className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium truncate">{recording.title}</h3>
                        <p className="text-xs text-muted-foreground">
                          {recording.date} • {recording.duration}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
