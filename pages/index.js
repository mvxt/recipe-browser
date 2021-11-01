import { createElement, useEffect, useState } from 'react';
import SyncLoader from "react-spinners/SyncLoader";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";

import Layout from 'components/layout';
import Modal from 'components/modal';
import Tab from 'components/tab';
import Tile from 'components/tile';

// Workaround for FontAwesome CSS issues
config.autoAddCss = false;

export default function Index(props) {
  const [activeTab, setActiveTab] = useState('Chicken');
  const [recipes, setRecipes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const tabs = [
    'Chicken', 'Beef', 'Pork', 'Vegetarian'
  ];

  const getRecipes = async (options = []) => {
    const output = await fetch('/api/recipes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        query: activeTab.toLowerCase(),
        options: options
      })
    }).then(result => result.json());

    setRecipes(output.hits);
  }

  const renderTabs = (tabName) => {
    return <Tab
      activeTab={activeTab}
      name={tabName}
      setActiveTab={setActiveTab}
      key={tabName}
    />;
  };

  const renderRecipes = (recipes) => {
    let output = [];

    for (let i = 0; i < recipes.length - 1; i += 3) {
      let tail = Math.min(i + 3, recipes.length);

      function rowOutput() {
        let output = [];
        for (let j = i; j < tail; j++) {
          output.push(
            <Tile
              key={j}
              recipe={recipes[j].recipe}
              setModalInfo={setModalInfo}
              setShowModal={setShowModal}
            />
          );
        }

        return output;
      };

      output.push(
        <div className='tile is-ancestor' key={i}>
          {rowOutput()}
        </div>
      );
    }

    return output;
  };

  useEffect(() => {
    setRecipes([]);
    getRecipes();
  }, [activeTab]);

  return (
    <Layout title="Recipe Browser">
      <div className="tabs is-boxed is-centered is-medium">
        <ul>
          {tabs.map(renderTabs)}
        </ul>
      </div>
      <div>
        {recipes.length ? 
          renderRecipes(recipes) :
          <p className="has-text-centered">
            <SyncLoader />
          </p>
        }
      </div>
      <Modal
        isActive={showModal}
        recipeInfo={modalInfo}
        setShowModal={setShowModal}
      />
    </Layout>
  )
}
