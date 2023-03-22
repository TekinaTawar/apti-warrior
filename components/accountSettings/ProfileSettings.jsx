import Image from "next/image";
import styled from "styled-components";
// * images
import avatar from "@/public/images/icons/settings/avatar.png";
import goldMedal from "@/public/images/icons/goldMedal.svg";
import silverMedal from "@/public/images/icons/silverMedal.svg";
import bronzeMedal from "@/public/images/icons/bronzeMedal.svg";
import trophy from "@/public/images/icons/settings/trophy.svg";
import star from "@/public/images/icons/star.svg";
import heart from "@/public/images/icons/settings/heart.svg";
import friends from "@/public/images/icons/settings/friends.svg";

const _ProfileSettings = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(5, fit-content(50px));
  grid-template-columns: 1.1fr 0.9fr;
  grid-template-areas:
    "nameLevel stats"
    "tierTrophy stats"
    "starMedal stats"
    "commendationsFriends stats"
    "bestAchievement stats";
  row-gap: var(--space-2xs-xs);
  column-gap: var(--space-xs-s);
`;

const StyledDiv = styled.div`
  border: 2.5px solid #f6e004;
  background: linear-gradient(
    232.88deg,
    #fdcf1d -25.32%,
    rgba(35, 0, 0, 0) 71.54%
  );
  position: relative;
  padding: 0 10px;

  ::before {
    position: absolute;
    height: 100%;
    width: 10px;
    content: "";
    background-color: black;
    border-right: 2.5px solid #f6e004;
    left: 0;
    top: 0;
  }

  ::after {
    position: absolute;
    height: 100%;
    width: 10px;
    content: "";
    background-color: black;
    border-left: 2.5px solid #f6e004;
    right: 0;
    top: 0;
  }
`;

const NameLevel = styled(StyledDiv)`
  grid-area: nameLevel;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: fit-content(80px) 1fr;
  grid-template-areas: "avatar name" "avatar level";
  padding-inline: calc(var(--space-s-m) + 10px);
  padding-block: var(--space-2xs-xs);
  column-gap: var(--space-xs-s);
  align-items: center;

  .avatar {
    grid-area: avatar;
    background-color: white;
    position: relative;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    filter: drop-shadow(0px 0px 12px #fdcf1d);

    .avatarImage {
      border-radius: 50%;
      object-fit: contain;
    }
  }
  .name {
    grid-area: name;
    font-weight: 700;
    font-size: var(--step-1);
  }
  .level {
    grid-area: level;
  }
`;

const TierTrophy = styled(StyledDiv)`
  grid-area: tierTrophy;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  padding-inline: calc(var(--space-s-m) + 10px);
  padding-block: var(--space-2xs-xs);
  align-items: center;

  .tier {
    position: relative;
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: var(--step-1);
    gap: var(--space-xs-s);
    .goldMedal {
      height: 84px;
      width: 84px;
      transform: translateY(8px);
    }
  }
  .trophy {
    position: relative;
    display: flex;
    justify-self: center;
    align-items: center;
    font-weight: 700;
    font-size: var(--step-2);
    gap: var(--space-xs-s);

    .trophyImae {
      height: 84px;
      width: 84px;
    }
  }
`;

const StarMedal = styled.div`
  grid-area: starMedal;
  display: grid;
  grid-template-columns: 1fr 2fr;
  position: relative;
  gap: var(--space-xs-s);

  .star {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-block: var(--space-4xs-3xs);
    gap: var(--space-4xs-3xs);

    span {
      font-family: "Stormfaze";
      font-size: var(--step-1);
    }
  }

  .medal {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    padding-block: var(--space-4xs-3xs);

    li {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;

      .medalImage {
        height: 70px;
        width: 80px;
      }
      span {
        font-family: "Stormfaze";
        font-size: var(--step-0);
      }
    }
  }
`;

const CommendationsFriends = styled(StyledDiv)`
  grid-area: commendationsFriends;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-inline: calc(var(--space-s-m) + 10px);
  padding-block: var(--space-2xs-xs);
  align-items: center;

  .commendations {
    display: grid;
    grid-template-rows: repeat(2, fit-content(50px));
    grid-template-columns: repeat(2, fit-content(50px));
    grid-template-areas: "title title" "heartImage count";
    /* justify-content: center; */
    justify-items: center;
    align-items: center;
    row-gap: var(--space-3xs-2xs);
    column-gap: var(--space-2xs-xs);

    .title {
      grid-area: title;
      font-weight: 700;
      font-size: var(--step-0);
      /* border: 1px solid white; */
    }

    .heartImage {
      grid-area: heartImage;
      width: 50px;
      height: 50px;
      /* border: 1px solid white; */
      justify-self: end;
    }

    .count {
      grid-area: count;
      font-weight: 700;
      font-size: var(--step-2);
      /* border: 1px solid white; */
      justify-self: start;
    }
  }

  .friends {
    display: grid;
    grid-template-rows: repeat(2, fit-content(50px));
    grid-template-columns: repeat(2, fit-content(50px));
    grid-template-areas: "title title" "friendsImage count";
    justify-self: center;
    justify-items: center;
    align-items: center;
    row-gap: var(--space-3xs-2xs);
    column-gap: var(--space-2xs-xs);

    .title {
      grid-area: title;
      font-weight: 700;
      font-size: var(--step-0);
      /* border: 1px solid white; */
    }

    .friendsImage {
      grid-area: friendsImage;
      width: 50px;
      height: 50px;
      /* border: 1px solid white; */
      justify-self: end;
    }

    .count {
      grid-area: count;
      font-weight: 700;
      font-size: var(--step-2);
      /* border: 1px solid white; */
      justify-self: start;
    }
  }
`;

const BestAchievement = styled(StyledDiv)`
  grid-area: bestAchievement;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "medalImage title" "medalImage achievement";
  justify-items: center;
  column-gap: var(--space-s-m);
  padding-block: var(--space-2xs-xs);

  .medalImage {
    grid-area: medalImage;
    height: 95px;
    width: 95px;
    justify-self: end;
  }
  .title {
    grid-area: title;
    font-weight: 700;
    font-size: var(--step-1);
    justify-self: start;
  }
  .achievement {
    grid-area: achievement;
    justify-self: start;
    .achievementName {
      font-weight: 700;
      font-size: var(--step-0);
    }
    .achievementDescription {
      font-weight: 400;
      font-size: var(--step--2);
    }
  }
`;

const Stats = styled(StyledDiv)`
  grid-area: stats;
`;

const ProfileSettings = () => {
  return (
    <_ProfileSettings>
      <NameLevel>
        <div className="avatar">
          <Image src={avatar} alt="avatar" fill className="avatarImage" />
        </div>
        <div className="name">Hemant Kant Malviya</div>
        <div className="level">Level 14</div>
      </NameLevel>
      <TierTrophy>
        <div className="tier">
          <Image src={goldMedal} alt="gold medal" className="goldMedal" />
          <span>Gold Tier Member</span>
        </div>
        <div className="trophy">
          <Image src={trophy} alt="trophy" className="trophyImage" />
          <span>10</span>
        </div>
      </TierTrophy>
      <StarMedal>
        <StyledDiv className="star">
          <Image src={star} alt="star" />
          <span>250</span>
        </StyledDiv>
        <StyledDiv className="medal">
          <li>
            <Image src={goldMedal} alt="gold medal" className="medalImage" />
            <span>10</span>
          </li>
          <li>
            <Image
              src={silverMedal}
              alt="silver medal"
              className="medalImage"
            />
            <span>100</span>
          </li>
          <li>
            <Image
              src={bronzeMedal}
              alt="bronze medal"
              className="medalImage"
            />
            <span>1000</span>
          </li>
        </StyledDiv>
      </StarMedal>
      <CommendationsFriends>
        <div className="commendations">
          <p className="title">Commendations</p>
          <Image src={heart} alt="" className="heartImage" />
          <span className="count">12</span>
        </div>
        <div className="friends">
          <p className="title">Friends</p>
          <Image src={friends} alt="" className="friendsImage" />
          <span className="count">19</span>
        </div>
      </CommendationsFriends>
      <BestAchievement>
        <Image src={silverMedal} alt="silver medal" className="medalImage" />
        <p className="title">Best Achievement</p>
        <div className="achievement">
          <p className="achievementName">Streakster</p>
          <p className="achievementDescription">Won 15 battels in streak</p>
        </div>
      </BestAchievement>
      <Stats>
        
      </Stats>
    </_ProfileSettings>
  );
};
export default ProfileSettings;
