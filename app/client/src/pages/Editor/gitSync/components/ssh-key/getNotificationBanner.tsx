import { NotificationBannerContainer } from "./StyledComponents";
import {
  NotificationBanner,
  NotificationVariant,
} from "components/ads/NotificationBanner";
import Text, { TextType } from "components/ads/Text";
import { Colors } from "constants/Colors";
import {
  createMessage,
  DEPLOY_KEY_USAGE_GUIDE_MESSAGE,
} from "@appsmith/constants/messages";
import React from "react";

/**
 * getNotificationBanner returns a notification banner about copying the key to repo settings.
 * @param learnMoreClickHandler {() => void} link that takes user to documentation
 * @param setShowKeyGeneratedMessage {( value: ((prevState: boolean) => boolean) | boolean ) => void}
 */
export default function getNotificationBanner(
  learnMoreClickHandler: () => void,
  setShowKeyGeneratedMessage: (
    value: ((prevState: boolean) => boolean) | boolean,
  ) => void,
): JSX.Element {
  return (
    <NotificationBannerContainer>
      <NotificationBanner
        canClose
        className={"enterprise"}
        learnMoreClickHandler={learnMoreClickHandler}
        onClose={() => setShowKeyGeneratedMessage(false)}
        variant={NotificationVariant.enterprise}
      >
        <div>
          <Text
            color={Colors.GREY_9}
            data-testid="t--deploy-key-usage-guide-message"
            type={TextType.P3}
          >
            {createMessage(DEPLOY_KEY_USAGE_GUIDE_MESSAGE)}
          </Text>
        </div>
      </NotificationBanner>
    </NotificationBannerContainer>
  );
}
