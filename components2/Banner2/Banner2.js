const Banner2 = () => {
  return (
    <div>
      <div>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://img.freepik.com/free-photo/contemporary-room-workplace-office-supplies-concept_53876-23184.jpg?w=900&t=st=1671813360~exp=1671813960~hmac=0847914cf385da6b545c5a4a6898637b535d9d882c925ef1995daf26c641e298"
              className="w-full h-[25rem]"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://img.freepik.com/free-photo/abstract-office-desktop_155003-6430.jpg?w=1060&t=st=1671813401~exp=1671814001~hmac=7446df6abf23f01c9dfb98e04f5c808f3eb45a371b9c014552511673f02da5a3"
              className="w-full h-[25rem]"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://img.freepik.com/free-photo/modern-office-desktop_155003-6424.jpg?w=900&t=st=1671813418~exp=1671814018~hmac=ec347f82068f7fadc3a247b541502791ff6343bfff51866c4ec3b513969ee705"
              className="w-full h-[25rem]"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://img.freepik.com/free-photo/hand-using-gadgets-laptop-top-view-blank-screen-with-copyspace-minimalistic-style-technologies-modern-marketing-negative-space-ad-flyer-yellow-color-background-stylish-trendy_155003-39472.jpg?w=1060&t=st=1671813438~exp=1671814038~hmac=2c3c77ca05e22190ed9fa122b405a342f02562a6e74f70fb3210084f385cda00"
              className="w-full h-[25rem]"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
