import React from 'react';
// import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
// import { Transition } from '@headlessui/react';

function Component() {
  const data = useStaticQuery(graphql`
    {
      settingsYaml(slug: { eq: "appointments" }) {
        appointments {
          day
          openingHours
        }
      }
    }
  `);
  const appointments = data.settingsYaml;

  return (
    <dl className="sm:divide-y sm:divide-gray-200">
      {appointments.appointments.map((appointment) => (
        <div key={appointment.day} className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">{appointment.day}</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 sm:text-right">
            {appointment.openingHours}
          </dd>
        </div>
      ))}
    </dl>
  );
}

Component.defaultProps = {};

Component.propTypes = {};

export default Component;
