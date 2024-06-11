import "./home.css";

function Home() {
  return (
    <>
      <div>
          <img id="myPortrait" src="https://placehold.co/400" alt="placeholder" />
      </div>
      <div className="custom-page">
        <h1 className="custom-title"> Name Surname </h1>
        <h2 className="custom-subtitle"> Software Engineer </h2>
        <p className="custom-paragraph">
          Welcome to my personal website. I am a software engineer with a passion for web development. I have experience with JavaScript, React, Node.js, and more. I am always looking for new opportunities to learn and grow as a developer. Feel free to check out my projects and reach out to me if you have any questions.
        </p>
      </div>
    </>
  );
}

export default Home;