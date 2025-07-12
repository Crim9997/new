import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

const Games = () => {
  const navigate = useNavigate();

  const games = [
    {
      title: "Visit Your Neko Friend",
      url: "https://www.roblox.com.mu/games/16031953626/visit-your-bestest-neko-friend?privateServerLinkCode=74018721997317954189772394124497",
      description: "Visit your bestest neko friend in this cozy experience"
    },
    {
      title: "Watch TV in bed with neko",
      url: "https://www.roblox.com.mu/games/15087497266/AI-Watch-TV-with-neko?privateServerLinkCode=74018721997317954189772394124497",
      description: "Relax and watch TV with your neko companion"
    },
    {
      title: "Meet a neko",
      url: "https://www.roblox.com.mu/games/14153443454/Meet-a-neko?privateServerLinkCode=74018721997317954189772394124497",
      description: "Discover and meet your new neko friend"
    }
  ];

  const handleGameClick = (url: string) => {
    window.open(url, "_blank");
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Back button */}
        <Button
          onClick={handleGoBack}
          className="neon-button group flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back
        </Button>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black neon-text mb-4">
            Our Condo Games
          </h1>
          <p className="text-xl text-muted-foreground fade-text">
            Choose your adventure
          </p>
        </div>

        {/* Games grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:neon-glow transition-all duration-300 group animate-float"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary group-hover:neon-text transition-all">
                  {game.title}
                </h3>
                <p className="text-muted-foreground">
                  {game.description}
                </p>
                <Button
                  onClick={() => handleGameClick(game.url)}
                  className="neon-button w-full group/btn flex items-center justify-center gap-2"
                >
                  Play Now
                  <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-20">
          <div className="inline-block">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
