import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import dayjs from "dayjs";
import packageJson from "../../package.json";

// import { GALog } from "../helpers/firebaseClient";

const SX = { mt: 4, mb: 4, textAlign: "center" };
const COMPANY_URL = "https://github.com/sensasi-apps";
// const ON_CLICK_LINK = (e) => GALog('click_company_page')
const versionDateDayjs = dayjs(packageJson.versionDate);

function Footer() {
	return (
		<Box sx={SX} component="footer">
			<Typography variant="body2" color="text.secondary">
				{"Copyright © "}
				<Link
					color="inherit"
					href={COMPANY_URL}
					// onClick={ON_CLICK_LINK}
					target="_blank"
				>
					Sensasi Apps
				</Link>
				{" " + versionDateDayjs.format("YYYY")}
			</Typography>
			<Typography variant="caption" color="text.secondary">
				v{packageJson.version}
			</Typography>
			<Box>
				<Typography variant="caption" color="text.secondary">
					{versionDateDayjs.format("DD-MM-YYYY")}
				</Typography>
			</Box>
		</Box>
	);
}

export default Footer;
