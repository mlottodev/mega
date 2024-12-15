export function HeroImage() {
  return (
    <div className="relative h-[70vh]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/landing.png")',
        }}
      >
        {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}
      </div>
    </div>
  );
}