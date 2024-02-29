import { Access } from "payload/config";

export const isInMaintenance: Access = ({ req: { user } }) => {
    if (process.env.MAINTENANCE_MODE) {
        return true
    } else {
        if (user.roles?.contains('admin')) {
            return true;
        } else {
            return false;
        }
    }
}