// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace OSFramework.Configuration {
    /**
     * Used to translate configurations from OS to Provider
     * Defines the basic structure for column objects
     */
    export interface IConfigurationColumn extends IConfiguration {
        /** Defines how data should be aligned */
        align: string;
        /** Indicates when a column was autoGenerated */
        autoGenerated: boolean;
        /** The datasource property used to print values on the column */
        binding: string;
        /** Defines if the column can or not be hidden */
        canBeHidden: boolean;
        /** Defines conditionalFormat to be applied on column cells */
        conditionalFormat: Array<OSStructure.ConditionalFormat>;
        /** A provider value!
         * This defines the type of the column */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dataType: any;
        /** A provider value!
         * A reference to the class used to instantiate the editor */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        editor: any;
        /** Message that will be displayed when column is mandatory and cell has error*/
        errorMessage: string;
        /** The format used to print data on screen.
         * This property is used only for data visualization.
         * @example Date fields can be DD/MM/YYYY
         */
        format: string;
        /** Id reference for the internal GenericColumn widget */
        genericColumnId: string;
        /** The header of a column */
        header: string;
        /** String to display on the column header tooltip */
        headerTooltip: string;
        /** Wether or not column is mandatory*/
        isMandatory: boolean;
        /** Defines when the column can or not be empty */
        required: boolean;
        /**
         * Represents the identifier created on OS and used as reference to find objects on screen
         */
        uniqueId: string;
        /**
         * If validateBinding is set to False then the binding specified by the user should not be validated. Mostly used by Action column with FixedText (e.g. binding: $Text)
         */
        validateBinding: boolean;
        /**
         * Determines whether or not the column is visible
         */
        visible: boolean;
        /**
         * Refresh config
         * @param providerConfig The config based on provider, used to update our internal config
         */
        // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
        updateConfig(providerConfig: any): void;
    }
}