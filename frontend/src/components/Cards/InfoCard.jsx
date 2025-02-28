import { Card, CardBody } from "@windmill/react-ui";
import PropTypes from "prop-types";

function InfoCard({ title, value, children: icon }) {
  return (
    <Card>
      <CardBody className="flex items-center">
        {icon}
        <div>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {title}
          </p>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            {value}
          </p>
        </div>
      </CardBody>
    </Card>
  );
}
InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.element,
  children: PropTypes.node,
};

export default InfoCard;
