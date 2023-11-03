function Input({ label, setUserFelid, value }) {
  return (
    <div className="form-control mb-6 w-full max-w-xl">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        onChange={(e) => setUserFelid(e.target.value)}
        value={value}
        type="text"
        placeholder="Type here"
        className=" input input-bordered w-72"
      />

      <span className="label-text-alt mt-2 text-neutral-500">
        (No password required)
      </span>
    </div>
  );
}

export default Input;
