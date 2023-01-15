const NewsLetter = () => {
  return (
    <section>
      <div className="newsLetter">
        <form className=" formNews">
          <p className="fw-bold">
            Never miss out on our daily news and Updates
          </p>
          <div class="mb-3">
            <label class="form-label">Email address</label>
            <input
              type="email"
              class="form-control w-75 inputStyle"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label">
              I would like to get updates from Toluene Airways
            </label>
          </div>
          <button type="submit" class="buttonhome1">
            Submit
          </button>
        </form>
      </div>{" "}
    </section>
  );
};

export default NewsLetter;
