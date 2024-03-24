// Library Imports
import { FC, useEffect, useState, ReactNode } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Interfaces and Types
import { IconProp } from "@fortawesome/fontawesome-svg-core";
// Components
import { Button } from "../button/Button";
// CSS
import "./card.scss";

type CardProps = {
  cardVariant: "mobile" | "imageOnly" | "imageAndBody";
  headerText: string;
  bodyText?: string;
  buttonCount: 0 | 1 | 2;
  button1Text?: string;
  button1Variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "quinternary"
    | "neutral"
    | "success"
    | "error";
  button1OnClick?: Function;
  button1Icon?: IconProp;
  button2Text?: string;
  button2Type?: "button" | "reset";
  button2Variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "quinternary"
    | "neutral"
    | "success"
    | "error";
  button2OnClick?: Function;
  button2Icon?: IconProp;
  buttonSize?: "small" | "medium" | "large";
  imageSource: string;
};

export const Card: FC<CardProps> = ({
  cardVariant,
  headerText,
  bodyText,
  buttonCount,
  button1Text,
  button1Variant,
  button1OnClick,
  button1Icon,
  button2Text,
  button2Variant,
  button2OnClick,
  button2Icon,
  buttonSize,
  imageSource,
}) => {
  if (cardVariant === "mobile") {
    return (
      <div className="card mobile-card">
        <img src={imageSource} />
        <h4>{headerText}</h4>
        <p>{bodyText}</p>
      </div>
    );
  } else if (cardVariant === "imageOnly") {
    return (
      <div
        className="card image-only-card semi-dark-image-overlay"
        style={{ backgroundImage: "url(" + imageSource + ")" }}
      >
        <p>{bodyText}</p>
        <h4 className="full-flex">{headerText}</h4>
        <div className="card-button-container"></div>
      </div>
    );
  } else if (cardVariant === "imageAndBody") {
    return (
      <div className="card image-and-body-card">
        <img src={imageSource} />
        <h3>{headerText}</h3>
        {bodyText ? <p>{bodyText}</p> : <></>}
        <div className="card-button-wrapper display-flex">
          {buttonCount >= 1 && button1OnClick ? (
            <Button
              text={button1Text !== undefined ? button1Text : undefined}
              variant="neutral"
              icon={button1Icon ? button1Icon : undefined}
              leftIcon={button1Icon ? true : false}
              buttonSize="medium"
              onClickHandler={button1OnClick}
            />
          ) : (
            <></>
          )}
          {buttonCount === 2 && button2OnClick ? (
            <Button
              text={button2Text !== undefined ? button2Text : undefined}
              variant="error"
              icon={button2Icon ? button2Icon : undefined}
              leftIcon={button2Icon ? true : false}
              buttonSize="medium"
              onClickHandler={button2OnClick}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
