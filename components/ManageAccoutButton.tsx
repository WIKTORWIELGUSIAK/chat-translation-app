import { generatePortalLink } from "@/actions/generatePortalLink";

function ManageAccoutButton() {
  return (
    <form action={generatePortalLink}>
      <button type="submit">Menage Billing</button>
    </form>
  );
}

export default ManageAccoutButton;
