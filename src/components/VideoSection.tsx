"use client";

export default function VideoSection() {
  return (
    <section className="w-full bg-white flex justify-center items-center py-20">
      <div className="w-[90%] md:w-[90%] aspect-video rounded-2xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/8ClYBtfhkaw?controls=1&modestbranding=1&rel=0"
          title="Unitree Robotics Video"
          allow="accelerometer; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
