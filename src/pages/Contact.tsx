const ContactPage = () => {
  return (
    <>
      <h1>DOU YOU WANT MY CONTACT?</h1>
      <form action="POST" className="flex flex-col space-y-3">
        <div className="flex flex-col max-w-[200px] gap-1">
          <label htmlFor="full-name">Full Name</label>
          <input id="full-name" type="text" className="border-1" />
        </div>
        <div>
          <button className="p-2 border-1 bg-[#242424] text-white rounded">
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactPage;
