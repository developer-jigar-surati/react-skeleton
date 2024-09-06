import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { emailRegx, passwordRegx } from '../../global/regx';
import { requiredFiledMessage, maxLengthMessage, minLengthMessage } from '../../global/errorMessage';
import { notify, toastComponents } from '../../global/notification';
import { postRequest } from '../../services/axiosServices';
import styles from './styles.module.scss';

const SingUp = () => {
  
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, getValues, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    console.log('onSubmit data', data);
    notify('Data Submitted', 'success');
    setLoading(true);
    const response = await postRequest('do-register', data);
    console.log('onSubmit response', response);
  }

  console.log('errors', errors);

  return (
    <React.Fragment>
      {toastComponents()}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 mt-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            {...register("email", { 
              required: { value: true, message: requiredFiledMessage('Email') }, 
              pattern: { value: emailRegx, message: "Invalid Email." },
              maxLength: { value: 50, message: maxLengthMessage(50) }
            })}
          />
          {errors?.email?.type === 'required' && <div className="text-danger">{errors?.email?.message}</div>}
          {errors?.email?.type === 'pattern' && <div className="text-danger">{errors?.email?.message}</div>}
          {errors?.email?.type === 'maxLength' && <div className="text-danger">{errors?.email?.message}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            {...register("password", { 
                required: { value: true, message: requiredFiledMessage('Password') }, 
                pattern: { value: passwordRegx, message: "Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character." },
                minLength: { value: 8, message: minLengthMessage(8) },
                maxLength: { value: 16, message: maxLengthMessage(16) }
              })}
          />
          {errors?.password?.type === 'required' && <div className="text-danger">{errors?.password?.message}</div>}
          {errors?.password?.type === 'pattern' && <div className="text-danger">{errors?.password?.message}</div>}
          {errors?.password?.type === 'minLength' && <div className="text-danger">{errors?.password?.message}</div>}
          {errors?.password?.type === 'maxLength' && <div className="text-danger">{errors?.password?.message}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="pwd">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Re-type password"
            {...register("confirmPassword", { 
              required: { value: true, message: requiredFiledMessage('Password') },
              validate: value => value === getValues('password') || "Passwords do not match.",
              pattern: { value: passwordRegx, message: "Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character." },
              minLength: { value: 8, message: minLengthMessage(8) },
              maxLength: { value: 16, message: maxLengthMessage(16) }
            })}
          />
          {errors?.confirmPassword?.type === 'required' && <div className="text-danger">{errors?.confirmPassword?.message}</div>}
          {errors?.confirmPassword?.type === 'validate' && <div className="text-danger">{errors?.confirmPassword?.message}</div>}
          {errors?.confirmPassword?.type === 'pattern' && <div className="text-danger">{errors?.confirmPassword?.message}</div>}
          {errors?.confirmPassword?.type === 'minLength' && <div className="text-danger">{errors?.confirmPassword?.message}</div>}
          {errors?.confirmPassword?.type === 'maxLength' && <div className="text-danger">{errors?.confirmPassword?.message}</div>}
        </div>
        <div className="form-check mb-3">
          <label className="form-check-label">
            <input 
              className="form-check-input" 
              type="checkbox" 
              name="remember"
              {...register("remember", { 
                required: { value: true, message: requiredFiledMessage('Remember me') },
              })} 
            />{" "}
            Remember me
          </label>
          {errors?.remember?.type === 'required' && <div className="text-danger">{errors?.remember?.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">
          {loading ? "Loading" : "Sign Up"}
        </button>
        <span className={styles['singup-link']}>
          <Link to="/">Sing In</Link>
        </span>
      </form>
    </React.Fragment>
  );
}

export default SingUp;
