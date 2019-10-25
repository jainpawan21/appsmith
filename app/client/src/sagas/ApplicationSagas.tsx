import {
  ReduxActionTypes,
  ReduxActionErrorTypes,
  ReduxAction,
} from "../constants/ReduxActionConstants";
import ApplicationApi, {
  PublishApplicationResponse,
  PublishApplicationRequest,
} from "../api/ApplicationApi";
import { call, put, takeLatest, all } from "redux-saga/effects";

import { validateResponse } from "./ErrorSagas";

export function* publishApplicationSaga(
  requestAction: ReduxAction<PublishApplicationRequest>,
) {
  try {
    const request = requestAction.payload;
    const response: PublishApplicationResponse = yield call(
      ApplicationApi.publishApplication,
      request,
    );
    const isValidResponse = yield validateResponse(response);
    if (isValidResponse) {
      yield put({
        type: ReduxActionTypes.PUBLISH_APPLICATION_SUCCESS,
      });
    }
  } catch (error) {
    yield put({
      type: ReduxActionErrorTypes.PUBLISH_APPLICATION_ERROR,
      payload: {
        error,
      },
    });
  }
}

export default function* applicationSagas() {
  yield all([
    takeLatest(
      ReduxActionTypes.PUBLISH_APPLICATION_INIT,
      publishApplicationSaga,
    ),
  ]);
}
