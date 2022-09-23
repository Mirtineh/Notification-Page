import { Fragment, useEffect, useState } from "react";
import markWebber from "./assets/images/avatar-mark-webber.webp";
import angelaGray from "./assets/images/avatar-angela-gray.webp";
import jacobThompson from "./assets/images/avatar-jacob-thompson.webp";
import rizkyHasanuddin from "./assets/images/avatar-rizky-hasanuddin.webp";
import kimberlySmith from "./assets/images/avatar-kimberly-smith.webp";
import nathanPeterson from "./assets/images/avatar-nathan-peterson.webp";
import annaKim from "./assets/images/avatar-anna-kim.webp";
import chess from "./assets/images/image-chess.webp";
import Card from "./components/card";
function App() {
  const [cards, setCards] = useState([
    {
      imageSrc: markWebber,
      name: "Mark Webber",
      isRead: false,
      content: (
        <Fragment>
          <span className="text-dark-grayish-blue">
            reacted to your recent post{" "}
          </span>
          <span
            className="text-dark-grayish-blue hover:text-blue hover:cursor-pointer font-extrabold
          "
          >
            My first tournament today!
          </span>
        </Fragment>
      ),
      time: "1m",
    },
    {
      imageSrc: angelaGray,
      name: "Angela Gray",
      isRead: false,
      content: <span className="text-dark-grayish-blue">followed you</span>,
      time: "5m",
    },
    {
      imageSrc: jacobThompson,
      name: "Jacob Thompson",
      isRead: false,
      content: (
        <span>
          has joined your group{" "}
          <span className="text-blue hover:cursor-pointer font-extrabold">
            Chess Club
          </span>
        </span>
      ),
      time: "1day",
    },
    {
      imageSrc: rizkyHasanuddin,
      name: "Rizky Hasanuddin",
      isRead: true,
      content: "sent you a private message",
      time: "5days",
      message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    },
    {
      imageSrc: kimberlySmith,
      name: "Kimberly Smith",
      isRead: true,
      content: "commented on your picture",
      time: "1week",
      additionalImageSrc: chess,
    },
    {
      imageSrc: nathanPeterson,
      name: "Nathan Peterson",
      isRead: true,
      content: (
        <span>
          reacted to your recent post{" "}
          <span
            className="text-dark-grayish-blue hover:text-blue hover:cursor-pointer font-extrabold
      "
          >
            5 end-game strategies to increase your win rate"
          </span>
        </span>
      ),
      time: "2weeks",
    },
    {
      imageSrc: annaKim,
      name: "Anna Kim",
      isRead: true,
      content: (
        <span>
          left the group{" "}
          <span className="text-blue hover:cursor-pointer font-extrabold">
            Chess Club
          </span>{" "}
        </span>
      ),
      time: "2weeks",
    },
  ]);
  const [allRead, setAllRead] = useState(false);
  useEffect(() => {
    if (allRead) {
      const tempCards = [...cards];
      setCards(
        tempCards.map((card) => {
          const index = tempCards.indexOf(card);
          tempCards[index] = { ...cards[index] };
          tempCards[index].isRead = true;
          return tempCards[index];
        })
      );
    }
  }, [allRead]);
  const count = cards.filter((card) => !card.isRead).length;
  return (
    <div className="sm:max-w-screen-sm font-sans bg-white mx-auto sm:my-10 rounded-lg px-5 pt-7 pb-3">
      <div className="flex items-end space-x-2 justify-between mb-6">
        <div className="flex items-end space-x-2">
          <h1 className="font-extrabold text-lg">Notifications</h1>
          <div className="bg-blue text-white text-lg rounded-md px-2 ">
            {count}
          </div>
        </div>

        <div
          onClick={() => setAllRead(true)}
          className="hover:cursor-pointer hover:text-blue"
        >
          Mark all as read
        </div>
      </div>

      {cards.map((card) => (
        <Card {...card} key={card.name} />
      ))}
    </div>
  );
}

export default App;
