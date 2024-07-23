import {Form} from "@remix-run/react";

function MusicForm() {
  return (
    <Form method="post">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
     <br />
   
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows="5" required />
      <br />
        <button type="submit">Add Note</button>
    </Form>
  );
}

export default MusicForm;

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

