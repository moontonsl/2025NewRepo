// Step3GameDetails.jsx
const Step3GameDetails = ({ formData, handleInputChange, handleSubmit }) => {
    return (
        <>
            <div className="form-container-register">
                <h1 className="title-register">CREATE MSL ACCOUNT</h1>
                <h2 className="subtitle-register">MLBB DETAILS</h2>

                <form className="form-register" onSubmit={handleSubmit}>
                    {/* User ID and Server ID */}
                    <div className="form-row-register">
                        <div className="input-group-register left-side-register">
                            <label htmlFor="userId" className="label-register">User ID<span className="required"> *</span></label>
                            <input
                                type="text"
                                id="userId"
                                name="userId"
                                value={formData.userId}
                                onChange={handleInputChange}
                                className="input-field-register"
                                required
                            />
                        </div>
                        <div className="input-group-register right-side-register">
                            <label htmlFor="serverId" className="label-register">MLBB Server ID<span className="required"> *</span></label>
                            <input
                                type="text"
                                id="serverId"
                                name="serverId"
                                value={formData.serverId}
                                onChange={handleInputChange}
                                className="input-field-register"
                                placeholder="e.g. 12345"
                                required
                            />
                        </div>
                    </div>

                    {/* IGN and Squad Name */}
                    <div className="form-row-register">
                        <div className="input-group-register left-side-register">
                            <label htmlFor="ign" className="label-register">IGN (Automated)</label>
                            <input
                                type="text"
                                id="ign"
                                name="ign"
                                value={formData.ign}
                                onChange={handleInputChange}
                                className="input-field-register"
                                readOnly
                            />
                        </div>
                        <div className="input-group-register right-side-register">
                            <label htmlFor="squadName" className="label-register">MLBB Squad Name</label>
                            <input
                                type="text"
                                id="squadName"
                                name="squadName"
                                value={formData.squadName}
                                onChange={handleInputChange}
                                className="input-field-register"
                                placeholder="e.g. Legends Squad"
                                required
                            />
                        </div>
                    </div>

                    {/* Squad Abbreviation and Rank */}
                    <div className="form-row-register">
                        <div className="input-group-register left-side-register">
                            <label htmlFor="squadAbbreviation" className="label-register">Squad Abbreviation</label>
                            <input
                                type="text"
                                id="squadAbbreviation"
                                name="squadAbbreviation"
                                value={formData.squadAbbreviation}
                                onChange={handleInputChange}
                                className="input-field-register"
                                placeholder="e.g. El Fili Esports"
                                required
                            />
                        </div>
                        <div className="input-group-register right-side-register">
                            <label htmlFor="rank" className="label-register">Current Rank<span className="required"> *</span></label>
                            <select
                                id="rank"
                                name="rank"
                                value={formData.rank}
                                onChange={handleInputChange}
                                className="input-field-register current-rank-select"
                                required
                            >
                                <option value="">Select Ranking</option>
                                <option value="Warrior">Warrior</option>
                                <option value="Elite">Elite</option>
                                <option value="Master">Master</option>
                                <option value="Grandmaster">Grandmaster</option>
                                <option value="Epic">Epic</option>
                                <option value="Legend">Legend</option>
                                <option value="Mythic">Mythic</option>
                                <option value="Mythical Glory">Mythical Glory</option>
                            </select>
                        </div>
                    </div>

                    {/* In-Game Role and Main Hero */}
                    <div className="form-row-register">
                        <div className="input-group-register left-side-register">
                            <label htmlFor="inGameRole" className="label-register">In-Game Role<span className="required"> *</span></label>
                            <select
                                id="inGameRole"
                                name="inGameRole"
                                value={formData.inGameRole}
                                onChange={handleInputChange}
                                className="input-field-register in-game-role-select"
                                required
                            >
                                <option value="">Select Role</option>
                                <option value="Tank">Tank</option>
                                <option value="Support">Support</option>
                                <option value="Marksman">Marksman</option>
                                <option value="Mage">Mage</option>
                                <option value="Assassin">Assassin</option>
                                <option value="Fighter">Fighter</option>
                            </select>
                        </div>
                        <div className="input-group-register right-side-register">
                            <label htmlFor="mainHero" className="label-register">Main Hero<span className="required"> *</span></label>
                            <select
                                id="mainHero"
                                name="mainHero"
                                value={formData.mainHero}
                                onChange={handleInputChange}
                                className="input-field-register main-hero-select"
                                required
                            >
                                <option value="">Select Hero</option>
                                <option value="Alucard">Alucard</option>
                                <option value="Layla">Layla</option>
                                <option value="Gusion">Gusion</option>
                                <option value="Fanny">Fanny</option>
                                <option value="Chou">Chou</option>
                                <option value="Kagura">Kagura</option>
                                {/* Add more heroes as needed */}
                            </select>
                        </div>
                    </div>

                    {/* Proof of Rank */}
                    <div className="form-row-register">
                        <div className="input-group-register full-width-register">
                            <label htmlFor="proofOfRank" className="label-register">
                                Proof of Rank (Screenshot)<span className="required"> *</span>
                            </label>
                            <input
                                type="file"
                                id="proofOfRank"
                                name="proofOfRank"
                                onChange={handleInputChange}
                                className="input-field-register file-input"
                                required
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Step3GameDetails;
