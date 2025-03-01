import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: left;
  width: 90%;
`;

const SearchForm = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 100%;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;
`;

const SuggestionsList = styled.ul`
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 200px;
  max-height: 150px;
  overflow-y: auto;
  z-index: 10;
`;

const SuggestionItem = styled.li`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const Select = styled.select`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  background-color: #0d3966;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: rgb(11, 134, 59);
  }
`;

const PropertySearchForm = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [budget, setBudget] = useState('');
  const [surface, setSurface] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const cities = [
    'Agadir', 'Ahfir' ,'Aïn Harrouda' ,'Aïn Taoujdat' ,'Ait Melloul' ,'Al Hoceïma' ,'Assa' ,'Azemmour' ,'Azilal'  , 
    'Beni Ansar' ,'Beni Mellal'  ,'Berkane' ,'Ben guerir' ,'Berrechid'  ,'Bouarfa'  ,'Boujniba'  ,'Boumalne-Dadès'  ,'Bouskoura'
, 'Bouznika', 'Souira' ,' Casablanca'  ,'Chefchaouen' ,'Dakhla' ,'Demnate' ,'Deroua'  ,'El Hajeb'  ,'El Jadida'  ,'El Kelaâ des Sraghna' ,'Errachidia' ,'Essaouira'
,'Fès' ,
'Fquih Ben Salah' ,
'Guelmim'  ,
'Guercif'  ,
'Ifrane'  ,
'Imzouren'  ,
'Inzegane'  ,
'Jerada'   ,
'Jorf El Melha'  ,
'Kasba Tadla'  ,
'Kelaat Mgouna'  ,
'Kenitra'  ,
'Khémisset'  ,
'Khénifra' ,
'Khouribga'  ,
'Larache'   ,
'Laâyoune'  ,
'Marrakech'   ,
'Martil'   ,
'Mechra Bel Ksiri'   ,
'Meknès'   ,
'Midar'  ,
'Midelt'   ,
'Mohammedia'   ,
'Moulay Driss Zerhoun'  ,
'Nador'  ,
'Oualidia'  ,
'Ouarzazate'  ,
'Ouezzane'   ,
'Oujda'   ,
'Oulad Teïma'   ,
'Rabat'    ,
'Rissani'  ,
'Safi'   ,
'Salé'  ,
'Sefrou'  ,
'Settat'  ,
'Sidi Bennour'  ,
'Sidi Kacem'  ,
'Sidi Slimane'   ,
'Skhirat'  ,
'Smara'   ,
'Souk El Arbaa'  ,
'Tanger'  ,
'Tan-Tan'  ,
'Taounate' ,
'Taourirt'    ,
'Taroudant'  ,
'Tata'  ,
'Taza'  ,
'Temara'  ,
'Tetouan'  ,
'Tinghir'  ,
'Tiznit'  ,
'Youssoufia' ];

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);

    if (value.length > 0) {
      const filteredCities = cities.filter(city =>
        city.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredCities);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectCity = (city) => {
    setLocation(city);
    setSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ location, propertyType, budget, surface });
  };

  return (
    <SearchBarContainer>
      <SearchForm onSubmit={handleSubmit}>
        <Select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
          <option value="location">Louer</option>
          <option value="achat">Acheter</option>
        </Select>

        <div style={{ position: 'relative' }}>
          <Input
            type="text"
            value={location}
            onChange={handleLocationChange}
            placeholder="Dans quelle ville"
          />
          {suggestions.length > 0 && (
            <SuggestionsList>
              {suggestions.map((city) => (
                <SuggestionItem key={city} onClick={() => handleSelectCity(city)}>
                  {city}
                </SuggestionItem>
              ))}
            </SuggestionsList>
          )}
        </div>

        <Select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
          <option value="appartement">Appartement</option>
          <option value="maison">Maison</option>
          <option value="bureau">Bureau</option>
          <option value="immeuble">Immeuble</option>
          <option value="terrain">Terrain</option>
        </Select>

        <Select value={budget} onChange={(e) => setBudget(e.target.value)}>
          <option value="">Sélectionnez un budget</option>
          {[
            { value: '0-500', label: '0 - 500 DH' },
            { value: '500-1000', label: '500 - 1000 DH' },
            { value: '1000-1500', label: '1000 - 1500 DH' },
            { value: '1500-2000', label: '1500 - 2000 DH' },
          ].map((bud) => (
            <option key={bud.value} value={bud.value}>
              {bud.label}
            </option>
          ))}
        </Select>

        <Input
          type="number"
          value={surface}
          onChange={(e) => setSurface(e.target.value)}
          placeholder="Surface en m²"
        />

        <Button type="submit">Rechercher</Button>
      </SearchForm>
    </SearchBarContainer>
  );
};

export default PropertySearchForm;
