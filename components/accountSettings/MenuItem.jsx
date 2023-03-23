import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";

const _MenuItem = styled.div`
  border: 2px solid hsla(32, 94%, 55%, 1);
  display: flex;
  align-items: center;
  gap: var(--space-2xs-xs);
  padding-block: var(--space-2xs-xs);
  padding-inline: var(--space-xs-s);
  cursor: pointer;

  :hover {
    border-radius: 10px;
    background-color: var(--gray-200);
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: var(--secondary-0);
      :hover {
        background-color: var(--secondary-0);
      }
    `}

  .itemImage {
  }

  .itemTitle {
    font-weight: 700;
    font-size: var(--step-2);
  }
`;

const MenuItem = ({ cardTitle, cardIcon, selected = true }) => {
  const router = useRouter();

  return (
    <_MenuItem
      selected={selected}
      onClick={() =>
        router.push(`/settings/${cardTitle}`, undefined, { shallow: true })
      }
    >
      <Image
        src={cardIcon}
        alt={cardTitle}
        width={40}
        height={40}
        className="itemImage"
      />
      <span className="itemTitle">
        {cardTitle.charAt(0).toUpperCase() + cardTitle.slice(1)}
      </span>
    </_MenuItem>
  );
};

export default MenuItem;
