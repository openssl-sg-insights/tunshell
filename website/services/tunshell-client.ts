
export class TunshellClient {
    constructor() {

    }

    init = async () => {
        const module = await import("../../tunshell-client/pkg/tunshell_client")

        module.tunshell_init_client("test", "test", "test");

        return module
    }
}