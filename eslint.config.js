import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
			
    {files: ["**/*.js"],
        plugins:{
            stylistic,			
        },
        rules: {
            "no-unused-vars": 2,
            "no-unexpected-multiline": 2,
            "no-unreachable": 2,
            "stylistic/indent": ["error", 4],					
        },
		
    },
		
]);
