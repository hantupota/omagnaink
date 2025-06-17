
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Users, Calendar, MessageSquare, Download } from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      icon: Plus,
      title: "New Task",
      description: "Create a new task",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "New Project",
      description: "Start a new project",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Team Meeting",
      description: "Schedule a meeting",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Calendar,
      title: "Add Event",
      description: "Create calendar event",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: MessageSquare,
      title: "Send Message",
      description: "Contact team member",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Download,
      title: "Export Data",
      description: "Download reports",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <div className="mb-12">
      <Card className="border-0 shadow-lg bg-gradient-to-r from-white to-slate-50/80">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Quick Actions</CardTitle>
          <CardDescription className="text-lg">
            Akses cepat ke fitur yang sering digunakan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {actions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-24 flex-col space-y-2 group hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-0 bg-white/50 hover:bg-white"
              >
                <div className={`p-2 rounded-lg bg-gradient-to-r ${action.color} group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="h-5 w-5 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium">{action.title}</p>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickActions;
