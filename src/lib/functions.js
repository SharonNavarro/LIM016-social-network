export const addErrorMessage = (formControl, message) => {
    const small = formControl.querySelector('small');
    formControl.classList.add('activeLoginErrorMessage');
    return small.innerText = message;
}

export const addErrorInput = (formControl, classControl) => {
   // const formControl = input.parentElement;
   return formControl.classList.add(classControl);
}

export const removeErrorMessage = (formControl, message) => {
   const small = formControl.querySelector('small');
   formControl.classList.remove('activeLoginErrorMessage');
   return small.innerText = message;
}

export const removeErrorInput = (formControl, classControl) => {
   return formControl.classList.remove(classControl);
}


// errores registro 





