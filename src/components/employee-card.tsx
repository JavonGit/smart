import { Heading3, TextLink } from '@smartive/guetzli';
import { usePlausible } from 'next-plausible';
import React, { FC } from 'react';
import { Employee } from '../data/employees';
import { PlausibleEvents } from '../utils/tracking';
import { Image } from './image';

type Props = {
  employee: Employee;
  className?: string;
};

const getFallbackImage = () =>
  `/images/portrait-fallback-${['apricot', 'mint', 'cornflower'][Math.floor(Math.random() * 3)]}.svg`;

export const EmployeeCard: FC<Props> = ({
  employee: { name, job, bio, github, linkedin, twitter, email, image, closeup },
  className = '',
}) => {
  const links = [
    email && {
      label: email,
      url: 'mailto:' + email,
    },
    linkedin && {
      label: 'LinkedIn',
      url: linkedin,
    },
    twitter && {
      label: 'Twitter',
      url: twitter,
    },
    github && {
      label: 'GitHub',
      url: github,
    },
  ].filter(Boolean);
  const plausible = usePlausible<PlausibleEvents>();

  const imageWithFallback = image || getFallbackImage();
  const closeupWithFallback = closeup || getFallbackImage();

  return (
    <div
      className={`flex flex-col bg-white-100 rounded overflow-hidden ${className}`}
      itemScope
      itemProp="employee"
      itemType="http://schema.org/Person"
    >
      <div className="hidden lg:block w-full">
        <Image src={imageWithFallback} rounded="none" alt="" objectFit="cover" width="463" height="640" />
      </div>
      <div className="block lg:hidden w-full">
        <Image itemProp="image" src={closeupWithFallback} rounded="none" alt="" objectFit="cover" width="480" height="300" />
      </div>
      <div className="flex flex-col flex-1 p-8 font-sans font-normal text-xxs lg:text-sm">
        <p className="mb-2 lg:mb-6" itemProp="jobTitle">
          {job}
        </p>
        <Heading3 className="text-base" itemProp="name">
          {name}
        </Heading3>
        <p>{bio}</p>
        <div className="flex flex-1 content-end flex-row flex-wrap mt-6 gap-x-4 gap-y-2">
          {links.map(({ label, url }) => {
            const itemProp = url.match(/^mailto:.+$/i) ? 'email' : 'sameAs';
            return (
              <TextLink
                key={url}
                itemProp={itemProp}
                href={url}
                onClick={() => {
                  plausible('Contact Click', {
                    props: {
                      value: url,
                      component: 'employee-card',
                      device: typeof window?.orientation !== 'undefined' ? 'mobile' : 'desktop',
                      url: window?.location.toString(),
                    },
                  });
                }}
              >
                {label}
              </TextLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};
