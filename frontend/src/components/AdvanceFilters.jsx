export default function AdvanceFilters({ filters, setFilters, onSearch }) {

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <select name="region" onChange={handleChange}>
        <option value="">Select Region</option>
        <option value="Scandinavian">Scandinavian</option>
        <option value="Indian">Indian</option>
      </select>

      <select name="diet" onChange={handleChange}>
        <option value="">Select Diet</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="pescetarian">Pescetarian</option>
      </select>

      <input
        type="number"
        name="minCalories"
        placeholder="Min Calories"
        onChange={handleChange}
      />

      <input
        type="number"
        name="maxCalories"
        placeholder="Max Calories"
        onChange={handleChange}
      />

      <button onClick={onSearch}>
        Apply Filters
      </button>
    </div>
  );
}
