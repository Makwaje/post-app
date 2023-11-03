import { LucideImagePlus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

function CreateForm() {
  const [isAnonymous, setIsAnonymous] = useState(false);

  const { register, reset, handleSubmit } = useForm();

  function onSubmit(formData) {
    if (!formData.img.length && !formData.post)
      alert("You idiot! \n can't post noting");

    console.log(formData);
    // reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-control">
      <label className="label">
        <span className="label-text font-semibold">how you feeling today?</span>
      </label>
      <textarea
        {...register("post")}
        className="textarea textarea-bordered h-24"
        placeholder="Say my name"
        dir="auto"
      ></textarea>

      <div className="divider mb-1"></div>
      <div className=" form-control mx-auto max-w-fit">
        <label className="label">
          <div className="flex items-center gap-2">
            <LucideImagePlus />
            <span className="label-text font-semibold">Upload a photo</span>
          </div>
        </label>
        <input
          {...register("img")}
          type="file"
          className="file-input file-input-bordered mb-10 w-full"
        />
        <label className="label cursor-pointer">
          <span className="label-text">Post as anonymous?</span>
          <input
            {...register("isAnon")}
            type="checkbox"
            className="toggle"
            checked={isAnonymous}
            onChange={() => setIsAnonymous((anon) => !anon)}
          />
        </label>
        <br />
        <button type="submit" className="btn btn-primary mx-auto w-fit px-6">
          Post
        </button>
      </div>
    </form>
  );
}

export default CreateForm;
