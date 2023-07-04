import { Card } from './components/Card';
import { Header } from './components/Header';
import { ReactComponent as CardOneIcon } from '/public/icons/card-one-icon.svg';
import { ReactComponent as CardTwoIcon } from '/public/icons/card-two-icon.svg';
import { ReactComponent as CardThreeIcon } from '/public/icons/card-three-icon.svg';

function App() {
  return (
    <main className="min-h-screen">
      <section
        // style={{ backgroundImage: 'url(/public/images/hehe.png' }}
        className="fua min-h-screen bg-no-repeat bg-right relative"
      >
        <div className="hello" />
        <Header />
        <div className="max-w-[1552px] w-full mx-auto">
          <div className="max-w-[565px] w-full">
            <h1 className="h1">Imagine with Serendipity</h1>
            <p className="subtitle">
              Discover a vibrant community of creators on Serendipity! Connect
              with thousands of like-minded individuals on Discord or the web
              and unleash your imagination through collaborative storytelling.
              From vivid worlds to unforgettable characters, bring your short
              text descriptions to life in new and exciting ways. Join OptimusAI
              today and embark on a journey of endless creativity!
            </p>
          </div>
          <div></div>
        </div>
      </section>
      <section className="wot rounded-t-3xl -mt-7 backdrop-blur-xl border-t border-solid">
        <div className="flex justify-between max-w-[1552px] w-full mx-auto py-20">
          <Card
            imageSource="/public/images/Yes.png"
            icon={<CardOneIcon className="absolute -top-3 right-9" />}
            title="Using Discord"
            heading="Mastering the Art of Prompt Writing"
            paragraph="Prompt writing involves crafting clear and engaging prompts, while using images to create a visual representation of the idea or concept..."
          />
          <Card
            imageSource="/public/images/wtf.png"
            icon={<CardTwoIcon className="absolute -top-3 right-9" />}
            title="Getting Started"
            heading="Streamlining Collaborative Workflows"
            paragraph="Use the Midjourney Bot on Discord to effortlessly generate designs and artworks for your project. Simply enter a command..."
          />
          <Card
            imageSource="/public/images/Image(2).png"
            icon={<CardThreeIcon className="absolute -top-3 right-9" />}
            title="User Guide"
            heading="Mastering the Art of Prompt Writing"
            paragraph="Explore key concepts like versions and parameters when using Midjourney. Versions refer to different variations of a design,..."
          />
        </div>
      </section>
    </main>
  );
}

export default App;
