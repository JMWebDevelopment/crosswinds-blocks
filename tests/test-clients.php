<?php
/**
 * Class DatabaseTest
 *
 * @package Jm_Client_Manager
 */

use JM_Client_Manager\Classes\Database\Database;
use JM_Client_Manager\Classes\Base\Client;
use JM_Client_Manager\Classes\Base\Contact;

/**
 * Sample test case.
 */
class ClientsTest extends WP_UnitTestCase {

	public function setUp() {
		parent::setUp();

		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-jm-client-manager-activator.php';
		JM_Client_Manager\JM_Client_Manager_Activator::activate();

		$this->class_instance = new Database();
	}

	/**
	 * Test out the clients class.
	 */
	public function test_database() {

		global $wpdb;
		$table = $wpdb->prefix . 'jm_cm_clients';

		// Add in a client.
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

		// Create a client object.
		$client = new Client( 1 );
		echo 'Client \n';
		print_r( $client );
		echo '\n';
		$this->assertInstanceOf( 'JM_Client_Manager\Classes\Base\Client', $client );
		echo '\n';
		/*

		// Update the client object.
		$client->update_client( [ 'business_address_line_1' => '751 N. Main St.' ] );

		// Check the get client method.
		echo 'Check get_client() \n';
		print_r( $client->get_client() );
		echo '\n';

		// Check deleting the client object.
		// $client->delete_client();
		// unset( $client );

		// Get a row of data.
		$sql    = "SELECT * FROM $table";
		$result = $this->class_instance->get_results( $sql );
		echo 'now deleted \n';
		print_r( $result );

		// $this->assertEquals( false, isset( $client ) );

		echo '\n';


		$data = [
			'business_ids'           => wp_json_encode( '' ),
			'contact_name'           => 'Christopher Harris',
			'contact_email'          => 'christopher@faithgrowth.com',
			'contact_phone'          => '214-555-5555',
			'contact_address_line_1' => '123 Main St.',
			'contact_address_line_2' => 'Apt. 123',
			'contact_city'           => 'Dallas',
			'contact_state'          => 'Texas',
			'contact_zip'            => '76034',
		];
		$result = $this->class_instance->add_row( 'contacts', $data );

		echo 'Added \n';

		$client->add_contact( 1 );

		print_r( $client->get_contacts() );

		echo '\n';

		echo 'Removed \n';

		$client->remove_contact( 1 );

		print_r( $client->get_contacts() );
		*/

		$data = [
			'business_id'       => 1,
			'invoice_amount'    => 'Christopher Harris',
			'invoice_due_date'  => 'christopher@faithgrowth.com',
			'invoice_date_paid' => '214-555-5555',
			'invoice_date_sent' => '123 Main St.',
			'invoice_status'    => 'Apt. 123',
			'invoice_items'     => wp_json_encode( '' ),
		];
		$result = $this->class_instance->add_row( 'invoices', $data );

		echo 'Added \n';

		print_r( $client->get_invoices() );

	}

}
