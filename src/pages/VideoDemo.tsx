import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const VideoDemo = () => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <SEO
        title="Video Demo — How Lovable to WordPress Works"
        description="Watch the step-by-step demo showing how Lovable to WordPress converts any Lovable ZIP into a working WordPress site in minutes. Free beta available."
      />
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">Video Demo</h1>
            <p className="text-xl text-muted-foreground">
              Watch how Lovable to WordPress works
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-card">
            <video 
              controls 
              className="w-full h-auto"
              src="https://lovabletowordpress.online/wp-content/uploads/2025/11/Lovable-To-WordPress-Demo-Video-Compressed.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VideoDemo;
