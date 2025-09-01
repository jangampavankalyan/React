import { useActionState, use } from "react";
import { OpinionsContext } from "../store/opinions-context";
import Submit from "./submit";

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);

  async function shareOpinionAction(prevState, formData) {
    const title = formData.get("title");
    const userName = formData.get("userName");
    const body = formData.get("body");

    let errors = [];

    if (title.trim().length < 5) {
      errors.push("Title must be 5 Characters long.");
    }
    if (body.trim().length < 10 || body.trim().length > 300) {
      errors.push("Opinion Must be in between 10 and 300 Characters long");
    }
    if (!userName.trim()) {
      errors.push("Please Provide your Name");
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          title,
          body,
          userName,
        },
      };
    }

    // submit to Backend
    await addOpinion({ title, body, userName });
    return { errors: null };
  }
  const [formState, formAction] = useActionState(shareOpinionAction, {
    errors: null,
  });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.enteredValues?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.enteredValues?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formState.enteredValues?.body}
          ></textarea>
        </p>

        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        <Submit />
      </form>
    </div>
  );
}
