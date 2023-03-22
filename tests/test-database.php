<?php
/**
 * Class DatabaseTest
 *
 * @package Jm_Client_Manager
 */

 use JM_Client_Manager\Classes\Database\Database;

/**
 * Sample test case.
 */
class DatabaseTest extends WP_UnitTestCase {

	public function setUp() {
		parent::setUp();

		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-jm-client-manager-activator.php';
		JM_Client_Manager\JM_Client_Manager_Activator::activate();

		$this->class_instance = new Database();
	}

	/**
	 * Test out the database class.
	 */
	public function test_database() {

		global $wpdb;
		$table = $wpdb->prefix . 'jm_cm_clients';

		// Add in a row.
		$data = [
			'business_name'           => 'Faith Growth',
			'business_website'        => 'https://faithgrowth.com',
			'business_address_line_1' => '1024 Bonanza Dr',
			'business_address_line_2' => 'Apt. 1222',
			'business_city'           => 'Arlington',
			'business_state'          => 'Texas',
			'business_zip'            => '76001',
			'status'                  => 'current-client',
			'service'                 => 'freelancing',
		];
		$result = $this->class_instance->add_row( 'clients', $data );
		$this->assertEquals( 1, $result );

		// Get a row of data.
		$sql    = "SELECT * FROM $table";
		$result = $this->class_instance->get_results( $sql );
		print_r( $result );
		$this->assertInternalType( 'array', $result );

		// Update a row of data.
		$data = [
			'business_address_line_1' => '751 N. Main St.',
		];
		$result = $this->class_instance->update_row( 'clients', [ 'ID' => 1 ], $data );
		$this->assertEquals( 1, $result );

		// Make sure the data was changed.
		$sql    = "SELECT * FROM $table";
		$result = $this->class_instance->get_results( $sql );
		print_r( $result );

		// Delete a row.
		$result = $this->class_instance->delete_row( 'clients', [ 'ID' => 1 ] );
		$this->assertEquals( 1, $result );

		// Make sure the data was deleted.
		$sql    = "SELECT * FROM $table";
		$result = $this->class_instance->get_results( $sql );
		print_r( $result );
	}

}
