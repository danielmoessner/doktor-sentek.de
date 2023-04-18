import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import lineBreaks from '../utils/lineBreaks';
import Appointments from '../components/Appointments';
import Indication from '../components/Indication';

function Page({ data }) {
  const page = data.pagesYaml;
  const members = data.allMarkdownRemark.nodes.map((node) => ({ ...node.frontmatter }));
  const illnesses = data.illnesses.nodes.map((node) => node.frontmatter);
  const { contact } = data;

  return (
    <Layout>
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <Indication />
      <main className="bg-gray-50">
        <section className="lg:relative">
          <div className="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-32 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-6 xl:pr-16">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">{page.header.title}</span>
                <span className="block ml-3 text-teal-600 xl:inline">{page.header.titleColor}</span>
              </h1>
              <p className="max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                {page.header.text}
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="#sprechstunden"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-teal-600 border border-transparent rounded-md hover:bg-teal-700 md:py-4 md:text-lg md:px-10"
                  >
                    {page.header.buttonLeft}
                  </Link>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link
                    to="#krankheitsbilder"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-teal-600 bg-white border border-transparent rounded-md hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    {page.header.buttonRight}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <GatsbyImage
              alt="Header Bild"
              className="absolute inset-0 object-cover w-full h-full"
              image={page.header.image.childImageSharp.gatsbyImageData}
            />
          </div>
        </section>
        <section id="krankheitsbilder">
          <div className="bg-white">
            <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">{page.illness.title}</h2>
                <p className="mt-4 text-lg text-gray-500">{page.illness.text}</p>
              </div>
              <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                {illnesses.map((illness) => (
                  <div key={illness.title} className="relative">
                    <dt>
                      <svg
                        className="absolute w-6 h-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p className="text-lg font-medium leading-6 text-gray-900 ml-9">
                        {illness.title}
                      </p>
                    </dt>
                    <dd className="mt-2 text-base text-gray-500 ml-9">
                      <p
                        className="line-clamp-3"
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: lineBreaks(illness.excerpt) }}
                      />
                      <Link
                        className="block mt-2 text-base font-semibold text-teal-600 hover:text-teal-500"
                        to={`/krankheitsbilder/${illness.slug}/`}
                      >
                        {page.illness.button}
                      </Link>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
        <section>
          <div className="">
            <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
              <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                <div className="space-y-5 sm:space-y-4">
                  <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {page.team.title}
                  </h2>
                  <p className="text-xl text-gray-500">{page.team.text}</p>
                </div>
                <div className="lg:col-span-2">
                  <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
                    {members.map((member) => (
                      <li key={member.title} className="sm:py-8">
                        <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                          <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                            <GatsbyImage
                              className="object-cover rounded-lg shadow-lg"
                              image={member.image.childImageSharp.gatsbyImageData}
                              alt={member.title}
                              style={{ position: 'absolute' }}
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <div className="space-y-4">
                              <div className="space-y-1 text-lg font-medium leading-6">
                                <h3>{member.title}</h3>
                                <p className="text-teal-600">{member.subtitle}</p>
                              </div>
                              <div className="prose-lg">
                                <p
                                  className="text-gray-500"
                                  // eslint-disable-next-line react/no-danger
                                  dangerouslySetInnerHTML={{
                                    __html: lineBreaks(member.excerpt),
                                  }}
                                />
                              </div>
                              <div className="pt-4">
                                <Link
                                  className="text-base font-semibold text-teal-600 hover:text-teal-500"
                                  to="/team/"
                                >
                                  {page.team.button}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="sprechstunden">
          <div className="relative bg-white">
            <div className="absolute inset-0">
              <div className="absolute inset-y-0 left-0 w-1/2" />
            </div>
            <div className="relative max-w-4xl mx-auto lg:grid lg:grid-cols-6">
              <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8 lg:py-24 xl:pr-12">
                <div className="max-w-lg mx-auto">
                  <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                    {page.appointment.title}
                  </h2>
                  <p className="mt-3 text-lg leading-6 text-gray-500">{page.appointment.text}</p>
                  <dl className="mt-8 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">Adresse</dt>
                      <dd
                        className=""
                        // eslint-disable-next-line
                        dangerouslySetInnerHTML={{ __html: lineBreaks(contact.address) }}
                      />
                    </div>
                    <div className="mt-6">
                      <dt className="sr-only">Telefon</dt>
                      <dd className="flex">
                        <svg
                          className="flex-shrink-0 w-6 h-6 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <a
                          href={`tel:${contact.phone}`}
                          className="ml-3 text-base font-medium text-gray-600 hover:text-teal-800"
                        >
                          {contact.phone}
                        </a>
                      </dd>
                    </div>
                    <div className="mt-3">
                      <dt className="sr-only">E-Mail</dt>
                      <dd className="flex">
                        <svg
                          className="flex-shrink-0 w-6 h-6 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <a
                          href={`mailto:${contact.email}`}
                          className="ml-3 text-base font-medium text-gray-600 hover:text-teal-800"
                        >
                          {contact.email}
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="px-4 pb-16 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                <div className="max-w-lg mx-auto lg:max-w-none">
                  <Appointments />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="relative bg-teal-900">
            <div className="h-56 bg-teal-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
              <GatsbyImage
                className="object-cover w-full h-full"
                image={page.antiAging.image.childImageSharp.gatsbyImageData}
                alt=""
              />
            </div>
            <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16">
              <div className="md:ml-auto md:w-1/2 md:pl-10">
                <h2 className="text-base font-semibold tracking-wider uppercase text-teal-050 text-opacity-80">
                  {page.antiAging.pretitle}
                </h2>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {page.antiAging.title}
                </p>
                <p className="mt-3 text-lg text-teal-050 text-opacity-80">{page.antiAging.text}</p>
                <div className="mt-8">
                  <div className="inline-flex space-x-3 rounded-md shadow">
                    <Link
                      to="/anti-aging/"
                      className="items-center justify-center block px-5 py-3 text-base font-medium text-teal-800 bg-white border border-transparent rounded-md hover:bg-gray-50 focus:outline-none ring-gray-50 focus:ring-2 ring-offset-teal-900 focus:ring-offset-2"
                    >
                      {page.antiAging.button}
                    </Link>
                    <Link
                      to="/anti-aging/#formular"
                      className="items-center justify-center block px-5 py-3 text-base font-medium text-teal-800 bg-white border border-transparent rounded-md hover:bg-gray-50 focus:outline-none ring-gray-50 focus:ring-2 ring-offset-teal-900 focus:ring-offset-2"
                    >
                      {page.antiAging.button2}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

Page.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default Page;

export const query = graphql`
  {
    contact: settingsYaml(slug: { eq: "contact" }) {
      address
      phone
      email
    }
    pagesYaml(slug: { eq: "home" }) {
      meta {
        image {
          childImageSharp {
            resize(width: 1200) {
              src
            }
          }
        }
        description
        title
      }
      header {
        titleColor
        title
        text
        buttonLeft
        buttonRight
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      illness {
        text
        button
        title
      }
      team {
        text
        title
        button
      }
      appointment {
        text
        title
      }
      antiAging {
        button
        button2
        pretitle
        text
        title
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter: { collection: { eq: "member" } } }) {
      nodes {
        frontmatter {
          title
          excerpt
          slug
          subtitle
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
    illnesses: allMarkdownRemark(
      filter: { frontmatter: { collection: { eq: "illness" } } }
      sort: { fields: frontmatter___order }
    ) {
      nodes {
        frontmatter {
          title
          excerpt
          slug
        }
      }
    }
  }
`;
