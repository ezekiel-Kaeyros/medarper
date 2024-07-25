import cookies from 'js-cookie';
import {
  EIGTH_FORM,
  FIFTH_FORM,
  FIRST_FORM,
  FORM_STEP,
  FOURTH_FORM,
  NINETH_FORM,
  TENTH_FORM,
  SECOND_FORM,
  SEVENTH_FORM,
  SIXTH_FORM,
  THIRD_FORM,
  USER_DATA,
  SHOW
} from './cookies.d';

export const setUserCookies = (data: any) => {
  cookies.set(USER_DATA, JSON.stringify(data), {
    expires: 60 * 60,
    domain: '.medar.nrw',
    secure:true
  });
};

export const getUserCookies = () => {
  console.log(1234);
  
  const data = cookies.get(USER_DATA);
  return data ? JSON.parse(data) : undefined;
};

export const removeUserCookies = () => {
  cookies.remove(USER_DATA, {domain: '.medar.nrw'});
};
export const setShow = (data: string) => {
  console.log('data', data);


  cookies.set(SHOW, data, { domain: '.medar.nrw'});
};
export const removeShow = () => {
  cookies.remove(SHOW, { domain: '.medar.nrw' });
};
// Setting FORM steps

export const getFormStep = (): number => {
  const step = cookies?.get(FORM_STEP);
  return step ? JSON.parse(step) : 1;
};

export const setFormStep = (step: number): void => {
  cookies.set(FORM_STEP, JSON.stringify(step), {
    expires: 1,
    domain: ".medar.nrw",
    secure: true
  });
};

export const clearFormStep = (): void => {
  cookies.remove(FORM_STEP, { domain: '.medar.nrw' });
};

// Form cookies

export const setFormCookies = (data: any, formData: string) => {
  cookies.set(formData, JSON.stringify(data), {
    expires: 7,
    domain: ".medar.nrw",
    secure:true

  });
};

export const getFormCookies = (formData: string) => {
  const data = cookies.get(formData);
  return data ? JSON.parse(data) : undefined;
};

export const clearFormCookies = () => {
  cookies.remove(FORM_STEP, { domain: '.medar.nrw' });
  cookies.remove(FIRST_FORM, { domain: '.medar.nrw' });
  cookies.remove(SECOND_FORM, { domain: '.medar.nrw' });
  cookies.remove(THIRD_FORM, { domain: '.medar.nrw' });
  cookies.remove(FOURTH_FORM, { domain: '.medar.nrw' });
  cookies.remove(FIFTH_FORM, { domain: '.medar.nrw' });
  cookies.remove(SIXTH_FORM, { domain: '.medar.nrw' });
  cookies.remove(SEVENTH_FORM, { domain: '.medar.nrw' });
  cookies.remove(EIGTH_FORM, { domain: '.medar.nrw' });
  cookies.remove(NINETH_FORM, { domain: '.medar.nrw' });
  cookies.remove(TENTH_FORM, { domain: '.medar.nrw' });
};
