import ImageContainer from "./ImageContainer";
import Search from "./Search";

import TextContainer from "./TextContainer";

export default function HeroBar() {
  return (
    <div className="w-full px-8 flex flex-col items-center justify-center  mx-auto ">
      <div className="w-full px-8 flex flex-col items-center justify-center gap-x-2 mx-auto lg:grid lg:grid-cols-2 lg:items-center lg:justify-center lg:gap-x-2 lg:mx-auto lg:px-8">
        <TextContainer />
        <ImageContainer />
      </div>
      <Search />
    </div>
  );
}
