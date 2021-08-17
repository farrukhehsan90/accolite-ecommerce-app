import {doGet, doPost, doPut} from './httpRequests';
import {BASE_URL, END_POINTS} from '@config';

const {
  LOGIN,
  SIGNUP,
  FORGOT_PASSWORD,
  GET_TOKEN,
  CURRENT_LOGIN,
  COUNTRIES,
  JOB_POST,
  CHECK_INSTANT_BOOKING_AVAILABILITY,
  AGENT_TEST,
  CATEGORY_INFO,
  GET_PROFILE_NOTIFICATIONS,
  GET_CUSTOMER_EDIT_DATA,
  QUESTIONS_WITH_OPTIONS,
  CUSTOMER_CREDIT_AVAILABILITY,
  JOB_DESCRIPTION,
  JOB_COMPLETE_UPSELL,
  GETRATINGS_BY_PAGE,
  MY_JOBS_BY_PAGE_USTA,
  GET_PROMOTION_CATEGORIES,
  GET_FEATURED_CATEGORIES,
  GET_LOYALTY_POINTS,
  GET_TOKEN_APPLE,
  DELETE_CARD,
  CREATE_CARD,
  SET_AS_DEFAULT_CC,
  LIST_CARD,
  PRE_CHECKOUT,
  CHECKOUT_REQUEST,
  CHECKOUT_LIST,
  COMPLETE_JOB_POST,
  COMPLETE_PAYMENT,
  GET_FINAL_COST,
  DASHBOARD,
  GET_TOKEN_2,
  REDEEM_LOYALTY,
  CANCEL_LOYALTY,
} = END_POINTS;

export const signupService = data => {
  return doPost(`${BASE_URL}${SIGNUP}`, data);
};

export const loginService = data => {
  return doPost(`${BASE_URL}${LOGIN}`, data);
};

export const forgotService = data => {
  return doPost(`${BASE_URL}${FORGOT_PASSWORD}`, data);
};

export const getTokenService = data => {
  return doPost(`${BASE_URL}${GET_TOKEN}`, data);
};

export const currentLoginService = data => {
  return doGet(`${BASE_URL}${CURRENT_LOGIN}`);
};

export const countriesService = data => {
  return doGet(`${BASE_URL}${COUNTRIES}`);
};

export const jobPostService = data => {
  return doPost(`${BASE_URL}${JOB_POST}`, data);
};

export const checkInstantBookingAvailabiltyService = data => {
  return doPost(`${BASE_URL}${CHECK_INSTANT_BOOKING_AVAILABILITY}`, data);
};

export const agentTestService = data => {
  return doGet(`${BASE_URL}${AGENT_TEST}`);
};

export const categoryInfoService = data => {
  return doGet(`${BASE_URL}${CATEGORY_INFO}`);
};

export const getProfileNotificationService = data => {
  return doGet(`${BASE_URL}${GET_PROFILE_NOTIFICATIONS}`);
};

export const getCustomerEditDataService = data => {
  return doGet(`${BASE_URL}${GET_CUSTOMER_EDIT_DATA}`);
};

export const questionsWithOptionsService = data => {
  return doGet(`${BASE_URL}${QUESTIONS_WITH_OPTIONS}`);
};

export const customerCreditAvailabiltyService = data => {
  return doGet(`${BASE_URL}${CUSTOMER_CREDIT_AVAILABILITY}`);
};

export const jobDescriptionService = data => {
  return doPost(`${BASE_URL}${JOB_DESCRIPTION}`, data);
};

export const jobCompleteUpsellService = data => {
  return doGet(`${BASE_URL}${JOB_COMPLETE_UPSELL}`);
};

export const getratingsByPageService = data => {
  return doGet(`${BASE_URL}${GETRATINGS_BY_PAGE}`);
};

export const myJobsByPageUstaService = data => {
  return doGet(`${BASE_URL}${MY_JOBS_BY_PAGE_USTA}`);
};

export const getPromotionCategoriesService = data => {
  return doGet(`${BASE_URL}${GET_PROMOTION_CATEGORIES}`);
};

export const getFeaturedCategoriesService = data => {
  return doGet(`${BASE_URL}${GET_FEATURED_CATEGORIES}`);
};

export const getLoyaltyPointsService = data => {
  return doGet(`${BASE_URL}${GET_LOYALTY_POINTS}`);
};

export const getTokenAppleService = data => {
  return doPost(`${BASE_URL}${GET_TOKEN_APPLE}`, data);
};

export const deleteCardService = data => {
  return doPost(`${BASE_URL}${DELETE_CARD}`, data);
};

export const createCardService = data => {
  return doPost(`${BASE_URL}${CREATE_CARD}`, data);
};

export const setAsDefaultCCService = data => {
  return doPost(`${BASE_URL}${SET_AS_DEFAULT_CC}`, data);
};

export const listCardService = data => {
  return doGet(`${BASE_URL}${LIST_CARD}`);
};

export const preCheckOutService = data => {
  return doPost(`${BASE_URL}${PRE_CHECKOUT}`, data);
};

export const checkOutRequestService = data => {
  return doGet(`${BASE_URL}${CHECKOUT_REQUEST}`);
};

export const checkOutListService = data => {
  return doGet(`${BASE_URL}${CHECKOUT_LIST}`);
};

export const completeJobPostService = data => {
  return doPost(`${BASE_URL}${COMPLETE_JOB_POST}`, data);
};

export const completePaymentService = data => {
  return doPost(`${BASE_URL}${COMPLETE_PAYMENT}`, data);
};

export const getFinalCostService = data => {
  return doGet(`${BASE_URL}${GET_FINAL_COST}`);
};

export const dashboardService = data => {
  return doGet(`${BASE_URL}${DASHBOARD}`);
};

export const getToken2Service = data => {
  return doPost(`${BASE_URL}${GET_TOKEN_2}`, data);
};

export const redeemLoyaltyService = data => {
  return doPost(`${BASE_URL}${REDEEM_LOYALTY}`, data);
};

export const canceLoyaltyService = data => {
  return doPost(`${BASE_URL}${CANCEL_LOYALTY}`, data);
};
