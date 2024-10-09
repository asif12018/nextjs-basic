'use client';
import { useForm } from 'react-hook-form';

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newUser = data;
    console.log(newUser);
    
    try {
      const response = await fetch('http://localhost:3000/signup/new-user', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to create new user');
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="p-14">
        <h3 className="text-3xl font-bold">Register From here</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Enter Your Full Name</span>
            </div>
            {/**===== name input field ===== */}
            <input
              type="text"
              placeholder="Full Name"
              {...register('name', { required: true })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && <span>This field is required</span>}
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Enter Your Email</span>
            </div>
            {/**===== email input field ===== */}
            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: true })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && <span>This field is required</span>}
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Enter Your Password</span>
            </div>
            {/**===== password input field ===== */}
            <input
              type="password"
              {...register('password', { required: true })}
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && <span>This field is required</span>}
          </label>

          <input className="btn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
