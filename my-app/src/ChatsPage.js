import PropTypes from "prop-types";
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId="a3fce5af-c705-4f57-9a7e-9b6fac081bf5"
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

ChatsPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
  }).isRequired,
};
export default ChatsPage;
