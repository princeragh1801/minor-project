import React from "react";
import Button from "../Button";
import BoxWithHeadingAndCotainer from "./BoxWithHeadingAndCotainer";
import FooterSection from "../Footer/Footer";

function Landing() {
  return (
    <> 
    <div className="w-full">
      <div className="flex h-2/3 mx-[5vw]">
        {/* Left Div */}
        <div className="w-1/2 p-4 my-20 ">
          <h2 className="text-3xl font-bold mb-2">
            Where Collaboration happens
          </h2>
          <p className="text-gray-700 text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
            neque molestias commodi quas maiores debitis incidunt tempora nobis
            vel eligendi earum distinctio recusandae odit voluptate totam, dolor
            officia minima et atque, impedit eaque ad perferendis! Recusandae
            quod esse impedit aliquam commodi. Repudiandae recusandae possimus
            corporis quod accusamus praesentium nemo non natus obcaecati
            provident voluptatum veritatis suscipit modi nobis optio, magnam
            maxime iusto reiciendis! Ullam necessitatibus blanditiis, sunt
            recusandae officia quidem.
          </p>
          <div class="hidden lg:block m-5">
            <Button title="Join Us" className="bg-green-500 text-white" />
            <Button title="Sign In" className="text-black border-2" />
          </div>
        </div>

        {/* Right Div */}
        <div className="w-1/2 p-4 h-2/3">
          <img
            src="src/assets/Images/Collab-rafiki.png"
            alt="Sample"
            className="w-full h-[80vh] rounded "
          />
        </div>
      </div>
      <div className="mx-[5vw]">
        <h1 className="text-center text-2xl font-bold">
          Why should I join .DOT
        </h1>
        <div className="flex h-2/3 mx-8">
          {/* Left Div */}
          <BoxWithHeadingAndCotainer title={`ACCELERATE`} heading={`Explore the platform join the community learn from others project`}/>

          {/* Right Div */}
          <div className="w-1/2 p-4 h-2/3">
            <img
              src="src/assets/Images/team-work.jpg"
              alt="Sample"
              className="w-full h-[80vh] rounded "
            />
          </div>
        </div>
      </div>
        <div className=" bg-green-200 ">
        <div className="flex h-2/3 mx-[5vw]">
          {/* Left Div */}
          <div className="w-1/2 p-8 h-2/3 mr-[10vw]">
            <img
              src="src/assets/Images/Internet Day-bro.png"
              alt="Sample"
              className="w-full h-[80vh] rounded bg-green-200"
            />
          </div>

          {/* Right Div */}
          <BoxWithHeadingAndCotainer title={`COMMUNITY`} heading={`Explore the platform join the community learn from others project`}/>
          
          </div>
          </div>
      </div>
      <FooterSection/>
    </>
  );
}

export default Landing;
