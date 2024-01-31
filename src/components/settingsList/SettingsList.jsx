import { SettingsItem } from "../settingsItem/SettingsItem";
import { SettingsModal } from "../settingsModal";

export const SettingsList = ({ modalSwitch, setModalSwitch }) => {
	return (
		<ul className="flex gap-4">
			<SettingsItem />
			<SettingsItem />
		</ul>
	);
};
