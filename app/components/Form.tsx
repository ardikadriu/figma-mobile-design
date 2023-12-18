const Form = () => {
  return (
    <form className="flex flex-col items-center mt-[162px]">
      <div className="text-center">
        <h1 className="text-[32px]">Welcome Onboard!</h1>
        <h3 className="text-[#00000080] ">Lets help you meet up tasks.</h3>
      </div>
      <input
        className="mt-[74px] w-[380px] pl-5 pt-4 pb-4 rounded-[30px] outline-0"
        type="text"
        placeholder="Enter your name"
      />
      <input
        className="mt-[40px] w-[380px] pl-5 pt-4 pb-4 rounded-[30px] outline-0"
        type="email"
        placeholder="Enter your email"
      />
      <input
        className="mt-[40px] w-[380px] pl-5 pt-4 pb-4 rounded-[30px] outline-0"
        type="password"
        placeholder="Enter your password"
      />
      <input
        className="mt-[40px] w-[380px] pl-5 pt-4 pb-4 rounded-[30px] outline-0"
        type="password"
        placeholder="Re-enter your password"
      />
    </form>
  );
};

export default Form;
