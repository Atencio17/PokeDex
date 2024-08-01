import { Stack } from "@chakra-ui/react";
import ProgressBar from "./ProgressBar";

const StatsSection = (props) => {
    return (
        <Stack spacing={5}>
            <ProgressBar name="HP" value={props.hp} />
            <ProgressBar name="ATK" value={props.atk} />
            <ProgressBar name="DEF" value={props.def} />
            <ProgressBar name="SP. ATK" value={props.satk} />
            <ProgressBar name="SP. DEF" value={props.sdef} />
            <ProgressBar name="VEL" value={props.vel} />
        </Stack>
    );
}

export default StatsSection;
