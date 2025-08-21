import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Recycle, 
  TrendingUp, 
  Award, 
  Leaf, 
  Trophy, 
  Target,
  Zap,
  Users,
  Calendar,
  CheckCircle
} from 'lucide-react';
import Navigation from '@/components/Navigation';

const Dashboard = () => {
  const userStats = {
    totalSubmissions: 23,
    pointsEarned: 1250,
    co2Saved: 45.2,
    rank: 3,
    currentStreak: 7,
    badges: [
      { name: 'Eco Warrior', description: '10+ submissions', icon: '🌱', earned: true },
      { name: 'Recycler Pro', description: '5 different categories', icon: '♻️', earned: true },
      { name: 'Green Champion', description: '100+ points', icon: '🏆', earned: true },
      { name: 'Planet Saver', description: '50kg CO₂ saved', icon: '🌍', earned: false },
    ]
  };

  const recentSubmissions = [
    { id: 1, item: 'iPhone 11', category: 'Smartphones', date: '2024-01-15', status: 'Processed', points: 50 },
    { id: 2, item: 'Dell Laptop', category: 'Laptops', date: '2024-01-12', status: 'In Transit', points: 100 },
    { id: 3, item: 'HP Printer', category: 'Printers', date: '2024-01-10', status: 'Collected', points: 75 },
    { id: 4, item: 'Samsung Tablet', category: 'Tablets', date: '2024-01-08', status: 'Processed', points: 60 },
  ];

  const challenges = [
    { id: 1, title: 'Weekly Recycler', description: 'Submit 3 items this week', progress: 66, reward: 100 },
    { id: 2, title: 'Category Master', description: 'Submit items from 5 categories', progress: 80, reward: 150 },
    { id: 3, title: 'Department Leader', description: 'Top contributor in your department', progress: 45, reward: 200 },
  ];

  const leaderboard = [
    { rank: 1, name: 'Alice Johnson', department: 'IT', points: 1890, submissions: 34 },
    { rank: 2, name: 'Mike Chen', department: 'Marketing', points: 1650, submissions: 28 },
    { rank: 3, name: 'You', department: 'Operations', points: 1250, submissions: 23 },
    { rank: 4, name: 'Sarah Davis', department: 'HR', points: 1100, submissions: 21 },
    { rank: 5, name: 'Tom Wilson', department: 'Finance', points: 950, submissions: 18 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-accent">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Welcome Back! 🌱
          </h1>
          <p className="text-xl text-muted-foreground">
            Track your eco-impact and continue making a difference
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card animate-fade-in-scale">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Submissions</p>
                  <p className="text-3xl font-bold text-foreground">{userStats.totalSubmissions}</p>
                </div>
                <Recycle className="h-12 w-12 text-primary animate-eco-pulse" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card animate-fade-in-scale">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Points Earned</p>
                  <p className="text-3xl font-bold text-success">{userStats.pointsEarned}</p>
                </div>
                <Zap className="h-12 w-12 text-success animate-eco-pulse" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card animate-fade-in-scale">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">CO₂ Saved (kg)</p>
                  <p className="text-3xl font-bold text-primary">{userStats.co2Saved}</p>
                </div>
                <Leaf className="h-12 w-12 text-primary animate-leaf-float" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card animate-fade-in-scale">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Leaderboard Rank</p>
                  <p className="text-3xl font-bold text-warning">#{userStats.rank}</p>
                </div>
                <Trophy className="h-12 w-12 text-warning animate-eco-pulse" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Submissions */}
          <Card className="lg:col-span-2 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Recent Submissions
              </CardTitle>
              <CardDescription>Your latest e-waste submissions and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentSubmissions.map((submission) => (
                  <div
                    key={submission.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-semibold text-foreground">{submission.item}</p>
                        <p className="text-sm text-muted-foreground">{submission.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant={submission.status === 'Processed' ? 'default' : 'secondary'}
                        className="mb-1"
                      >
                        {submission.status}
                      </Badge>
                      <p className="text-sm text-success font-medium">+{submission.points} pts</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Badges & Achievements */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-success" />
                Badges & Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {userStats.badges.map((badge, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg text-center border-2 transition-all duration-200 ${
                      badge.earned
                        ? 'border-success bg-success/10 text-success'
                        : 'border-border bg-muted text-muted-foreground'
                    }`}
                  >
                    <div className="text-2xl mb-1">{badge.icon}</div>
                    <p className="text-xs font-medium">{badge.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Challenges & Leaderboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Active Challenges */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-warning" />
                Active Challenges
              </CardTitle>
              <CardDescription>Complete challenges to earn bonus points!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {challenges.map((challenge) => (
                <div key={challenge.id} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-foreground">{challenge.title}</p>
                      <p className="text-sm text-muted-foreground">{challenge.description}</p>
                    </div>
                    <Badge variant="outline">+{challenge.reward} pts</Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-primary font-medium">{challenge.progress}%</span>
                    </div>
                    <Progress value={challenge.progress} className="h-2" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Leaderboard */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Leaderboard
              </CardTitle>
              <CardDescription>Top contributors this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {leaderboard.map((user, index) => (
                  <div
                    key={user.rank}
                    className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                      user.name === 'You'
                        ? 'bg-primary/10 border-2 border-primary'
                        : 'bg-accent/30 hover:bg-accent/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        user.rank === 1 ? 'bg-warning text-warning-foreground' :
                        user.rank === 2 ? 'bg-muted text-muted-foreground' :
                        user.rank === 3 ? 'bg-accent text-accent-foreground' :
                        'bg-secondary text-secondary-foreground'
                      }`}>
                        {user.rank}
                      </div>
                      <div>
                        <p className={`font-semibold ${user.name === 'You' ? 'text-primary' : 'text-foreground'}`}>
                          {user.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{user.department}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-success">{user.points}</p>
                      <p className="text-xs text-muted-foreground">{user.submissions} items</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 flex gap-4 justify-center">
          <Button size="lg" className="gradient-hero" asChild>
            <a href="/submit">Submit New Item</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/analytics">View Analytics</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;